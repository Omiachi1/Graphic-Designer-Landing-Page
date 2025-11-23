import React, { useState, useEffect } from 'react'

const skills = [
  // Branding & Identity
  { name: "Logo Design", level: 95, category: "branding" },
  { name: "Typography Mastery", level: 90, category: "branding" },
  { name: "Color Theory", level: 85, category: "branding" },
  { name: "Brand Identity Systems", level: 90, category: "branding" },
  { name: "Creative Direction", level: 85, category: "branding" },

  // Digital & Social Media Design
  { name: "Social Media Graphics", level: 90, category: "digital design" },
  { name: "Poster & Banner Design", level: 85, category: "digital design" },
  { name: "Advertising Graphics", level: 80, category: "digital design" },
  { name: "Content Layout & Composition", level: 85, category: "digital design" },
  { name: "Motion Graphics Basics", level: 65, category: "digital design" },

  // Illustration & Print
  { name: "Digital Illustration", level: 80, category: "illustration & print" },
  { name: "Vector Art", level: 85, category: "illustration & print" },
  { name: "Print Layouts (Brochures, Flyers)", level: 90, category: "illustration & print" },
  { name: "Packaging Design", level: 75, category: "illustration & print" },
  { name: "Book & Magazine Layout", level: 70, category: "illustration & print" },

  // Tools
  { name: "Adobe Photoshop", level: 95, category: "tools" },
  { name: "Adobe Illustrator", level: 95, category: "tools" },
  { name: "Adobe InDesign", level: 85, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Canva", level: 90, category: "tools" },
  { name: "Wacom / Drawing Tablets", level: 70, category: "tools" },
  { name: "Procreate", level: 65, category: "tools" },
];

const categories = [
  "all",
  "branding",
  "digital design",
  "illustration & print",
  "tools",
];

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if it's mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  // Handle category change and reset showAllSkills
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAllSkills(false);
  };

  // Determine which skills to display
  const displaySkills = () => {
    if (activeCategory !== 'all' || !isMobile || showAllSkills) {
      return filteredSkills;
    }
    
    // Show only first 6 skills in mobile view for "all" category
    return filteredSkills.slice(0, 6);
  };

  const skillsToDisplay = displaySkills();
  const shouldShowSeeMore = activeCategory === 'all' && isMobile && !showAllSkills && filteredSkills.length > 6;

  return (
    <div id='skills' className='px-[4%] md:px-[8%] relative'>
      <div className='w-full'>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[#0000A3]"> Skills</span>
        </h2>

        <div className='mx-auto md:flex justify-between mb-10'>
          {categories.map((category, key) => (
            <button 
              key={key} 
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2 mx-3 my-4 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category 
                  ? 'bg-[#0000A3] text-[#EAF0F7]' 
                  : 'text-[#EAF0F7] hover:bg-[#0000A3]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {skillsToDisplay.map((skill, key) => (
            <div  
              key={key} 
              className='relative rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] bg-clip-padding border border-transparent p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'
            >
              <div className='text-left mb-4'>
                <h3 className='font-semibold text-lg'>{skill.name}</h3>
              </div>
              <div className='w-full h-2 rounded-full overflow-hidden'>
                <div 
                  className='bg-[#0000A3] h-2 rounded-full origin-left anima animate-[grow_1.5s_ease-out]'
                  style={{width: skill.level + '%'}} 
                />
              </div> 
              <div className='text-right mt-1'>
                <span className='text-sm '>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More/Less Button */}
        {shouldShowSeeMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllSkills(true)}
              className="px-6 py-2 bg-[#0000A3] text-[#EAF0F7] rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              See More ({filteredSkills.length - 6} more)
            </button>
          </div>
        )}

        {showAllSkills && isMobile && activeCategory === 'all' && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllSkills(false)}
              className="px-6 py-3 bg-[#0000A3] text-[#EAF0F7] rounded-full hover:bg-blue-700 transition-colors duration-300">
              See Less
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillSection