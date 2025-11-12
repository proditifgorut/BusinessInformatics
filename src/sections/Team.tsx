import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  {
    avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/0D1B2A/E0E1DD?text=A",
    name: "Alex Doe",
    role: "Lead IT Business Analyst"
  },
  {
    avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/0D1B2A/E0E1DD?text=J",
    name: "Jane Smith",
    role: "Data Analytics Specialist"
  },
  {
    avatar: "https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/0D1B2A/E0E1DD?text=M",
    name: "Mike Johnson",
    role: "Digital Strategy Consultant"
  }
];

const Team = () => {
  return (
    <AnimatedSection id="team" className="py-20 bg-dark-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tim & Kompetensi</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mt-4"></div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-light-grey mb-12">
          Kami terdiri dari ahli di bidang IT Business, Data Analytics, dan Digital Strategy dengan pengalaman di berbagai sektor industri dan pemerintahan.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-dark-grey shadow-lg" />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-accent-blue">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Team;
