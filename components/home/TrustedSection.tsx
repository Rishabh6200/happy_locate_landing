'use client';
import {
   Container,
   useTheme,
} from '@mui/material';
import ServiceCard from './card/ServiceCard';
import ServiceHead from './heading/ServiceHead';

const services = [
   {
      title: 'Packing & Moving',
      description:
         'Experience a Stree--free move with expert Packing and secure Relocation. From doorstep pickup to safe delivery, we handle everything with care and precision!',
      image: '/boy-box.png',
   },
   {
      title: 'Pet Relocation',
      description:
         'Ensuring a stress-free journey for your furry friends, no matter the distance. From playful pups to pampered cats, we move them safely with love and expertise.',
      image: '/whitedog.png',
   },
   {
      title: 'Pet Taxi',
      description:
         'Safe and reliable rides designed just for your furry friends. Comfortable, secure, and always on time, because Pets deserve the best!',
      image: '/dog.png',
   },
   {
      title: 'Storage',
      description:
         'Secure, spacious, and Stress-free storage solutions for all your needs. Store it today, access it anytime, your belongings, always protected!',
      image: '/image 14073.png',
   },
   {
      title: 'Vehicle Shifting',
      description:
         'Smooth and damage-free transportation for your cars and bikes. Wherever you go, we ensure your vehicle reaches safely!',
      image: '/image 14072.png',
   },
   {
      title: 'Support Services',
      description:
         'From planning to settling in, Our services include Visa assistance, Destination services, Corporate stays across 50+ countries, and more, ensuring a seamless transition wherever you go.',
      image: '/luggage.png',
   },
];

const TrustedSection = () => {
   const { palette } = useTheme();
   return (
      <section className={`bg-[#F7F7F7] py-10 text-[${palette.primary.main}] font-bold`} >
         <Container>
            <ServiceHead heading='Expert and Reliable' specialHeading='Relocation Services.' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {services.map((service, idx) => (
                  <div key={idx} className="h-full">
                     <ServiceCard {...service} />
                  </div>
               ))}
            </div>
         </Container>
      </section>
   );
};



export default TrustedSection;
