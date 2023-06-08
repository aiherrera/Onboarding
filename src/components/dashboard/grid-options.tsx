import { ACTIONS } from './constants'

const GridOptions = () => {
  return (
    <div className="max-w-6xl divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-md shadow-[#BED731] sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {ACTIONS.map((action, actionIdx) => (
        <div
          key={action.title}
          className={`
            ${actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : ''}
            ${actionIdx === 1 ? 'sm:rounded-tr-lg' : ''}
            ${actionIdx === ACTIONS.length - 2 ? 'sm:rounded-bl-lg' : ''}
            ${actionIdx === ACTIONS.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : ''}
            group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#BED731]
          `}
        >
          <div>
            <span
              className={`${action.iconBackground} ${action.iconForeground}
                ring-white' inline-flex rounded-lg p-3 ring-4
              `}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
          </div>

          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  )
}

export default GridOptions
