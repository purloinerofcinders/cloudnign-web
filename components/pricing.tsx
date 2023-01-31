import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    href: () => { },
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Pay by per user',
    includedFeatures: [
      'Leave management system.',
      'Google calendar features.'
    ],
  },
  {
    name: 'Infinite',
    href: () => { },
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Pay a fixed amount for infinite* users.',
    includedFeatures: [
      'Everything in starter.',
      'Infinite users.'
    ],
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing(props: any) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 px-10 sm:px-6 lg:px-8 bg-gray-100 rounded-3xl">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-500 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-400 sm:text-center">
            We are currently free! For limited time only.
          </p>
          <div className="relative mt-6 flex self-center rounded-full bg-gray-200 p-0.5 sm:mt-8">
            <button
              onClick={() => props?.setBillingType('monthly')}
              type="button"
              className={classNames("relative w-1/2 whitespace-nowrap rounded-full py-2 text-sm font-medium text-gray-500 focus:z-10 focus:outline-none sm:w-auto sm:px-8", props?.billingType === 'monthly' ? 'border-gray-200 bg-white shadow-sm' : 'mr-0.5 border border-transparent')}
            >
              Bill monthly
            </button>
            <button
              onClick={() => props?.setBillingType('yearly')}
              type="button"
              className={classNames("relative w-1/2 whitespace-nowrap rounded-full flex flex-col justify-center items-center py-2 text-sm font-medium text-gray-500 focus:z-10 focus:outline-none sm:w-auto sm:px-8", props?.billingType === 'yearly' ? 'border-gray-200 bg-white shadow-sm' : 'ml-0.5 border border-transparent')}
            >
              <span>Bill yearly</span>
              <span className='absolute text-emerald-400 font-bold pointer-events-none -bottom-7'>Save 0%</span>
            </button>
            
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid grid-cols-2 sm:gap-6 sm:space-y-0 mx-auto md:max-w-3xl">
          {tiers.map((tier) => (
            <div key={tier.name} className="divide-y divide-gray-200 rounded-3xl  bg-white">
              <div className="p-10">
                <h2 className="text-lg font-medium leading-6 text-gray-500">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-400">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-500">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">{props?.billingType === 'monthly' ? '/user/month' : '/user/year'}</span>
                </p>
                <button
                  disabled
                  onClick={tier.href}
                  className="mt-8 block w-fit px-4 rounded-full bg-blue-200 py-2 text-center text-sm font-semibold text-white hover:bg-gray-400"
                >
                  Buy {tier.name}
                </button>
              </div>
              <div className="px-10 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-500">Features included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-200" aria-hidden="true" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <p className='text-gray-400 text-sm'>* Subject to approval for more than 9999 users.</p>
        </div>
      </div>
    </div>
  )
}
