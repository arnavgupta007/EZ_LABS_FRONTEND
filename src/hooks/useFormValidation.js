import { useState } from 'react'

const useFormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 100,
      pattern: null,
      message: 'Name must be between 2 and 100 characters',
    },
    email: {
      required: true,
      pattern: /^\S+@\S+\.\S+$/,
      message: 'Please enter a valid email address',
    },
    phone: {
      required: true,
      pattern: /^\+?\d{7,15}$/,
      message: 'Phone must be 7-15 digits (optional + prefix)',
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      pattern: null,
      message: 'Message must be between 10 and 1000 characters',
    },
  }

  // Validate single field
  const validateField = (name, value) => {
    const rules = validationRules[name]
    
    if (!rules) return ''

    if (rules.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    }

    if (rules.minLength && value.length < rules.minLength) {
      return rules.message
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return rules.message
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return rules.message
    }

    return ''
  }

  // Validate all fields
  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })
    return newErrors
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear submit status on any change
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' })
    }

    // Validate if field was already touched
    if (touchedFields[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  // Handle field blur
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }))

    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouchedFields(allTouched)

    // Validate all fields
    const newErrors = validateForm()
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fix the errors above before submitting',
      })
      return
    }

    // Submit form
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Form Submitted',
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        setErrors({})
        setTouchedFields({})
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitStatus({
          type: 'error',
          message: errorData.message || 'Submission failed. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
  }
}

export default useFormValidation
