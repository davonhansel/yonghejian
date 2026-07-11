'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { team, partners, getLocalizedTeamMember, getLocalizedPartner } from '@/lib/data'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'

type Props = {
  content: Record<string, string>
}

export default function AboutPageClient({ content }: Props) {
  const locale = useLocale()
  const t = useTranslations('AboutPage')

  const localizedTeam = team.map((member) => getLocalizedTeamMember(member, locale as 'en' | 'zh'))
  const localizedPartners = partners.map((partner) => getLocalizedPartner(partner, locale as 'en' | 'zh'))

  return (
    <div className="pt-24">
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
                {content.heroTitle ?? t('heroTitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {content.heroText ?? t('heroText')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">
                    {content.heroCta1 ?? t('heroCta1')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    {content.heroCta2 ?? t('heroCta2')}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Factory production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              {content.milestonesTitle ?? t('milestonesTitle')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.milestonesSubtitle ?? t('milestonesSubtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                year: '2016',
                title: content.milestone1Title ?? t('milestone1Title'),
                description: content.milestone1Desc ?? t('milestone1Desc'),
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                year: '2018',
                title: content.milestone2Title ?? t('milestone2Title'),
                description: content.milestone2Desc ?? t('milestone2Desc'),
                image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                year: '2020',
                title: content.milestone3Title ?? t('milestone3Title'),
                description: content.milestone3Desc ?? t('milestone3Desc'),
                image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                year: '2023',
                title: content.milestone4Title ?? t('milestone4Title'),
                description: content.milestone4Desc ?? t('milestone4Desc'),
                image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((milestone, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-muted-foreground mb-6">{milestone.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image src={milestone.image} alt={milestone.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              {content.valuesTitle ?? t('valuesTitle')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.valuesSubtitle ?? t('valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: content.value1Title ?? t('value1Title'),
                description: content.value1Desc ?? t('value1Desc'),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M12 2v4.5" />
                    <path d="m20 10-4.5-2.5" />
                    <path d="m18 20-3-5" />
                    <path d="m6 20 3-5" />
                    <path d="m4 10 4.5-2.5" />
                    <path d="M12 12v2.5" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
              },
              {
                title: content.value2Title ?? t('value2Title'),
                description: content.value2Desc ?? t('value2Desc'),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: content.value3Title ?? t('value3Title'),
                description: content.value3Desc ?? t('value3Desc'),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M2 12h5" />
                    <path d="M17 12h5" />
                    <path d="M12 2v5" />
                    <path d="M12 17v5" />
                    <path d="M12 12 2 2" />
                    <path d="m12 12 10 10" />
                    <path d="m12 12 10-10" />
                    <path d="m12 12-10 10" />
                  </svg>
                ),
              },
              {
                title: content.value4Title ?? t('value4Title'),
                description: content.value4Desc ?? t('value4Desc'),
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="text-primary inline-flex items-center justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              {content.teamTitle ?? t('teamTitle')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.teamSubtitle ?? t('teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {localizedTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-[3/4]">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              {content.partnersSectionTitle ?? t('partnersSectionTitle')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.partnersSectionSubtitle ?? t('partnersSectionSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: content.partnersPhilosophy1Title ?? t('partnersPhilosophy1Title'),
                description: content.partnersPhilosophy1Desc ?? t('partnersPhilosophy1Desc'),
              },
              {
                title: content.partnersPhilosophy2Title ?? t('partnersPhilosophy2Title'),
                description: content.partnersPhilosophy2Desc ?? t('partnersPhilosophy2Desc'),
              },
              {
                title: content.partnersPhilosophy3Title ?? t('partnersPhilosophy3Title'),
                description: content.partnersPhilosophy3Desc ?? t('partnersPhilosophy3Desc'),
              },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-8">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedPartners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <Image src={partner.logo} alt={partner.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                    “{partner.testimonial}”
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                {content.ctaTitle ?? t('ctaTitle')}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                {content.ctaText ?? t('ctaText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    {content.ctaButton1 ?? t('ctaButton1')}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/projects">
                    {content.ctaButton2 ?? t('ctaButton2')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
