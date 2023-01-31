import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon, CloudIcon, DevicePhoneMobileIcon, CalendarIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Cloud-based',
    description: 'No need to host your own servers. Buy yourself something nice with the extra money you save!',
    icon: CloudIcon,
  },
  {
    name: 'Mobile-friendly',
    description:
      'Use it anywhere, anytime.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Google calendar',
    description:
      'Synchronised with your Google calendar.',
    icon: CalendarIcon,
  },
  {
    name: 'Minimalistic design',
    description:
      'Clutter free. See only what you need.',
    icon: PaintBrushIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-500 sm:text-4xl">A better way to manage your employees.</h2>
          </div>
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200 text-white">
                    <feature.icon className="h-7 w-auto" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-gray-500">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
