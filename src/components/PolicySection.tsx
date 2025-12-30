type BulletItem = {
  title: string
  description: string
}

type SectionProps = {
  number: number
  heading: string
  intro?: string
  items: BulletItem[]
}

export default function PolicySection({
  number,
  heading,
  intro,
  items,
}: SectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-5">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-[#284599] mb-4">
        {number}. {heading}
      </h2>

      {/* Optional Intro */}
      {intro && (
        <p className="text-gray-700 mb-6">
          {intro}
        </p>
      )}

      {/* Bullet List */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Orange Dot */}
            <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />

            {/* Text */}
            <p className="text-gray-800 leading-relaxed">
              <span className="font-semibold">
                {item.title}
              </span>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
