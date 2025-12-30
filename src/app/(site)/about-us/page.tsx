import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import UnderstandPain from '@/components/UnderstandPain'
import React from 'react'

const aboutpage = () => {
    return (
        <>
            <PageBreadcrumb title={"About Nivaan"} />
            <UnderstandPain
                imageUrl="https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Understand-Video-Image.webp"
                videoUrl="https://www.hclient.in/nivaan/wp-content/uploads/2025/12/understand-your-pain.mp4"
                title="We Rethink Pain. So You Can Rethink Life."
                description="<p>Pain has a way of quietly taking over your life. How you move. How you work. How you rest. Over time, it begins to shape what you avoid, what you postpone, and what you accept as normal.</p><p>Nivaan exists to change that.</p><p>At Nivaan, we help people overcome neck pain, back pain, shoulder pain, and knee pain through evidence-based, non-surgical care. Our focus is not temporary relief. It is understanding the root cause of pain and addressing it with precision, coordination, and continuity.</p><p>Care at Nivaan is designed to be connected, thoughtful, and centered around the individual. Integrated, people-centric pain care is not an exception here. It is the standard.</p>"
                buttonText="Take The Next Step"
                onButtonClick="/contct-us"
            />
        </>
    )
}

export default aboutpage