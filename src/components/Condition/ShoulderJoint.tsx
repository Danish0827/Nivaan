import React from 'react'
import parse from "html-react-parser";

const ShoulderJoint = ({jointDescription}:{jointDescription:string}) => {
    return (
        <section className="w-full bg-white overview-section">
            <div className="container mr-auto">
                {/* Top Heading */}
                {jointDescription && (
                    <div className="text-gray-700 pt-5 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                        {parse(jointDescription)}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ShoulderJoint