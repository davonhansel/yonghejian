"use client"

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

type Props = {
  content: Record<string, string>
}

export default function ContactClient({ content }: Props) {
  const t = useTranslations('ContactPage')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formSchema = z.object({
    name: z.string().min(2, { message: t('nameError') }),
    email: z.string().email({ message: t('emailError') }),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, { message: t('messageError') }),
  })

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
      form.reset()
    }, 1500)
  }

  return (
    <div className="pt-24">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {content.title ?? t('pageTitle')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {content.subtitle ?? t('pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg border border-border p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{content.successTitle ?? t('successTitle')}</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">{content.successText ?? t('successText')}</p>
                  <Button onClick={() => setIsSubmitted(false)}>{content.resetButton ?? t('resetButton')}</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">{content.formTitle ?? t('formTitle')}</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('nameLabel')}</FormLabel>
                              <FormControl>
                                <Input placeholder={content.namePlaceholder ?? t('namePlaceholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('emailLabel')}</FormLabel>
                              <FormControl>
                                <Input placeholder={content.emailPlaceholder ?? t('emailPlaceholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('phoneLabel')}</FormLabel>
                              <FormControl>
                                <Input placeholder={content.phonePlaceholder ?? t('phonePlaceholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t('companyLabel')}</FormLabel>
                              <FormControl>
                                <Input placeholder={content.companyPlaceholder ?? t('companyPlaceholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('messageLabel')}</FormLabel>
                            <FormControl>
                              <Textarea placeholder={content.messagePlaceholder ?? t('messagePlaceholder')} className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (content.submittingText ?? t('submittingText')) : (content.submitText ?? t('submitText'))}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>

            <div>
              <div className="bg-muted/30 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">{content.infoTitle ?? t('infoTitle')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{content.infoEmailLabel ?? t('infoEmailLabel')}</h3>
                      <a href="mailto:1****@qq.com" className="text-muted-foreground hover:text-foreground transition-colors">1****@qq.com</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{content.infoPhoneLabel ?? t('infoPhoneLabel')}</h3>
                      <a href="tel:0769-83264959" className="text-muted-foreground hover:text-foreground transition-colors">0769-83264959</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{content.addressLabel ?? t('addressLabel')}</h3>
                      <address className="not-italic text-muted-foreground">{content.address ?? t('address')}</address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{content.hoursLabel ?? t('hoursLabel')}</h3>
                      <p className="text-muted-foreground">{content.hoursWeekday ?? t('hoursWeekday')}<br />{content.hoursWeekend ?? t('hoursWeekend')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[300px] relative rounded-lg overflow-hidden">
                <Image src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Factory location" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">{content.faqTitle ?? t('faqTitle')}</h2>
            <p className="text-muted-foreground text-lg">{content.faqSubtitle ?? t('faqSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { question: content.faq1Q ?? t('faq1Q'), answer: content.faq1A ?? t('faq1A') },
              { question: content.faq2Q ?? t('faq2Q'), answer: content.faq2A ?? t('faq2A') },
              { question: content.faq3Q ?? t('faq3Q'), answer: content.faq3A ?? t('faq3A') },
              { question: content.faq4Q ?? t('faq4Q'), answer: content.faq4A ?? t('faq4A') },
              { question: content.faq5Q ?? t('faq5Q'), answer: content.faq5A ?? t('faq5A') },
              { question: content.faq6Q ?? t('faq6Q'), answer: content.faq6A ?? t('faq6A') },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
