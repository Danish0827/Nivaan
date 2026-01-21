"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type React from "react"
import { useState } from "react"
import { montserratBold, montserratSemiSemiBold } from "@/app/fonts"

interface FormData {
  SingleLine: string
  SingleLine1: string
  PhoneNumber_countrycode: string
  Email: string
  MultiLine: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    SingleLine: "",
    SingleLine1: "",
    PhoneNumber_countrycode: "",
    Email: "",
    MultiLine: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     try {
//       const response = await fetch('https://forms.zohopublic.in/nivaancare/form/NivaanPainManagementDoctorsNearMe/formperma/xGII3YYhVljf4HucewAU-gsJy5GO7clL-0HitpWYIMY/htmlRecords/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       })

//       const data = await response.json()
//       console.log('API Response:', data)

//       if (response.ok) {
//         // Clear form after successful submission
//         setFormData({
//           SingleLine: "",
//           SingleLine1: "",
//           PhoneNumber_countrycode: "",
//           Email: "",
//           MultiLine: ""
//         })
//         alert('Message sent successfully!')
//       } else {
//         throw new Error('Failed to send message')
//       }

//     } catch (error) {
//       console.error('Error submitting form:', error)
//       alert('Failed to send message. Please try again.')
//     }
//   }

  return (
    <div className="min-h-screen bg-[#d3eaf9]">
      <div className="container px-4 py-12 mx-auto">
        {/* Get In Touch Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-blue-700 mb-4 ${montserratBold.className}`}>
            Get In <span className="text-blue-900">Touch</span>
          </h1>
          <p className={`text-gray-600 text-lg md:text-xl ${montserratSemiSemiBold.className}`}>
            We are listening. Do write in with your concerns/feedback.
          </p>
        </div>

        <div id="column" className="flex flex-col gap-16">
          {/* Contact Information */}
          <div id="row" className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 w-full">
            <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-sm">
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className={`text-2xl font-semibold text-gray-700 ${montserratBold.className}`}>Address</h2>
              <p className={`text-gray-600 ${montserratSemiSemiBold.className}`}>
                {/* REWIND HEALTHCARE PRIVATE LIMITED */}
                Nivaan Interventional Pain and Regenerative Medicine Center
                <br />
                F-23, opposite Sri Aurobindo College,
                <br />
                Geetanjali Enclave, Malviya Nagar, New Delhi, Delhi 110017
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-sm">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className={`text-2xl font-semibold text-gray-700 ${montserratBold.className}`}>Phone</h2>
              <p className={`text-gray-600 ${montserratSemiSemiBold.className}`}>+91-90 7005 7005</p>
              <p className={`text-gray-600 ${montserratSemiSemiBold.className}`}>+91-90 2029 5000</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-sm">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <h2 className={`text-2xl font-semibold text-gray-700 ${montserratBold.className}`}>Email</h2>
              <p className={`text-gray-600 ${montserratSemiSemiBold.className}`}>care@nivaancare.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg md:max-w-4xl mx-auto w-full">
            <CardHeader className="space-y-3 text-center">
              <CardTitle className={`text-2xl text-blue-700 ${montserratBold.className}`}>Send Your Message</CardTitle>
              <p className={`text-gray-600 mx-auto max-w-lg ${montserratSemiSemiBold.className}`}>
                Tired of traveling from one doctor to another to treat your muscle and joint pain?
              </p>
            </CardHeader>
            <CardContent>
              <form
            //   onSubmit={handleSubmit}
                action={"https://forms.zohopublic.in/nivaancare/form/NivaanPainManagementDoctorsNearMe/formperma/xGII3YYhVljf4HucewAU-gsJy5GO7clL-0HitpWYIMY/htmlRecords/submit"}
                className={`space-y-6 ${montserratSemiSemiBold.className}`}
                name='form' 
                id='form' 
                method='POST' 
                accept-charset='UTF-8' 
                encType='multipart/form-data'
                >
                <input type="hidden" name="zf_referrer_name" value=""/>
                <input type="hidden" name="zf_redirect_url" value=""/>
                <input type="hidden" name="zc_gad" value=""/>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    id="firstName"
                    name="SingleLine"
                    value={formData.SingleLine}
                    onChange={handleChange}
                    placeholder="First Name*" 
                    required 
                    className="bg-white" 
                  />
                  <Input 
                    id="lastName"
                    name="SingleLine1"
                    value={formData.SingleLine1}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    className="bg-white" 
                  />
                </div>
                <Input
                  id="phone"
                  name="PhoneNumber_countrycode"
                  value={formData.PhoneNumber_countrycode}
                  onChange={handleChange}
                  placeholder="Phone Number*" 
                  required 
                  type="tel" 
                  className="bg-white" 
                />
                <Input 
                  id="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Email ID*" 
                  required 
                  type="email" 
                  className="bg-white" 
                />
                <Textarea 
                  id="message"
                  name="MultiLine"
                  value={formData.MultiLine}
                  onChange={handleChange}
                  placeholder="Message" 
                  className="min-h-[150px] bg-white" 
                />
                <Button type="submit" className={`w-full bg-blue-700 hover:bg-blue-800 ${montserratBold.className}`}>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

