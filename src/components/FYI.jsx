import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Import the CSS file for the About component

const FYI = () => {
  const navigate = useNavigate();

  const handleGetEstimateClick = () => {
    navigate('/estimate');
  };

  return (
    <div className='FYI-container'>
     <h1 className='fyi-title'>Custom Concrete Countertops – Frequently Asked Questions (FAQ)</h1>

<h2 className='fyi-question'>1. How durable are concrete countertops compared to other materials?</h2>
<p className='fyi-answer'>Concrete countertops are extremely durable and can last a lifetime with proper care. They are comparable to granite and quartz in strength and are highly resistant to heat and scratches. Unlike laminate or butcher block, concrete won’t easily warp or chip. However, because they are handmade, small surface variations or hairline cracks may develop over time, which add to their character rather than affecting functionality.</p>

<h2>2. Do concrete countertops stain or crack easily?</h2>
<p>Concrete countertops are sealed to prevent stains, but like any porous material, they require proper maintenance. Acidic substances like wine, lemon juice, and vinegar can etch the surface if left uncleaned. Regular resealing (typically every 1-3 years) helps keep them stain-resistant. As for cracks, structural cracks are rare, but hairline cracks may develop due to natural curing and temperature changes. These are usually cosmetic and do not affect performance.</p>

<h2>3. Can I customize the color, texture, or design of my concrete countertop?</h2>
<p>Absolutely! Custom concrete countertops offer a high degree of personalization. You can choose from a wide range of colors, finishes (polished, matte, or textured), and edge profiles. We can also integrate decorative elements like glass chips, shells, or custom inlays to create a one-of-a-kind design. Whether you prefer a sleek modern look or a rustic, natural finish, we can craft something unique to your space.</p>

<h2>4. How do I maintain and clean my concrete countertops?</h2>
<p>Maintaining concrete countertops is simple. Clean them with a mild, pH-neutral soap and water—avoid harsh chemicals like bleach or ammonia, as they can damage the sealant. Resealing periodically helps keep the surface protected from stains and wear. Using cutting boards and trivets will also extend the life of your countertop. If minor scratches or dull spots appear over time, they can often be buffed out or resealed to restore the finish.</p>

<h2>5. How much do custom concrete countertops cost?</h2>
<p>In Ontario, the cost of custom concrete countertops typically ranges from <strong>$70 to $150 per square foot</strong>, depending on the design, finish, and complexity of the project. Basic designs with standard finishes tend to be on the lower end, while intricate designs with embedded features, integral sinks, or premium sealants may cost more. For an accurate quote, we provide consultations to discuss your project specifications.</p>

<h2>6. How long does it take to install concrete countertops?</h2>
<p>The entire process, from design consultation to installation, usually takes <strong>2 to 4 weeks</strong>. This includes the design phase, mold creation, pouring, curing (which takes about a week), sealing, and final installation. Since concrete needs time to fully cure for optimal strength, the timeline ensures durability and a high-quality finish. If you have a tight deadline, we can discuss options to expedite the process where possible.</p>

<h2>7. Why choose concrete over granite or quartz?</h2>

<p><strong>Customization & Uniqueness:</strong> Concrete countertops allow for a level of personalization that granite and quartz cannot match. They can be custom-shaped, colored, and embedded with decorative elements like glass, shells, or metal inlays. This makes them an excellent choice for those looking for a one-of-a-kind countertop that truly reflects their style.</p>

<p><strong>Seamless & Molded Designs:</strong> Unlike pre-cut slabs of granite or quartz, concrete can be molded into any shape. This allows for seamless installations, integrated sinks, and custom edge profiles that create a more cohesive and aesthetically pleasing look in your kitchen or bathroom.</p>

<p><strong>Durability & Heat Resistance:</strong> Concrete is an incredibly strong and heat-resistant material. Unlike quartz, which can discolor or scorch under extreme heat, concrete can withstand hot pots and pans placed directly on the surface. With proper sealing, it is also resistant to daily wear and tear.</p>

<p><strong>Eco-Friendly & Sustainable:</strong> Concrete is an environmentally friendly option, especially when locally sourced or made with recycled materials. Many homeowners choose concrete countertops as a sustainable alternative to mined stone surfaces like granite, reducing their environmental impact.</p>

    </div>
  );
};

export default FYI;
