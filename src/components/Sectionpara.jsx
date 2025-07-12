import React from 'react'
import InfiniteScroll from './InfiniteScroll ';

const Sectionpara = () => {
   const items = [
  { content: "Website Redesign for Intra Home Systems" },
  { content: <p>Increased user engagement by 532% through a responsive and visually appealing interface.</p> },

  { content: "SEO Strategy for Air Duct Brothers" },
  { content: <p>Generated a 244% boost in organic search traffic by optimizing content and site structure.</p> },

  { content: "Lead Generation Funnel for Velocity Moving" },
  { content: <p>Improved lead conversion rate by 375% using a dynamic landing page and call-to-action optimization.</p> },

  { content: "Referral Campaign Implementation" },
  { content: <p>Implemented a multi-channel referral campaign, resulting in a 510% rise in referral traffic.</p> },

  { content: "Content Marketing for B2B Clients" },
  { content: <p>Produced high-converting blog content that drove a 320% increase in inbound inquiries.</p> },

  { content: "Email Automation Setup for Legal Services" },
  { content: <p>Created personalized automation sequences that increased client retention by 30%.</p> },

  { content: "UI/UX Optimization for Retail Portals" },
  { content: <p>Enhanced customer experience with intuitive UI, improving time on site by 28%.</p> },

  { content: "PPC Advertising for Automotive Sector" },
  { content: <p>Reduced cost-per-click by 18% while increasing lead volume by 62%.</p> },
];

  return (
    <div className='mt-20' style={{height: '500px', position: 'relative'}}>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>
  )
}

export default Sectionpara