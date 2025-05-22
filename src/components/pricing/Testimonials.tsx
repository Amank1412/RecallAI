
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Medical Student",
      avatar: "/placeholder.svg",
      content: "RecallAI has completely transformed how I study for medical exams. I can retain complex information much more efficiently now.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Content Researcher",
      avatar: "/placeholder.svg",
      content: "The Pro plan has been worth every penny. My productivity has doubled and the ability to extract text from images is game-changing.",
      rating: 5
    },
    {
      name: "Michael Torres",
      role: "Software Engineer",
      avatar: "/placeholder.svg",
      content: "I store all my programming notes in RecallAI. The API access allows me to integrate it with my development workflow seamlessly.",
      rating: 5
    }
  ];

  return (
    <div className="my-16">
      <h3 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            
            <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
