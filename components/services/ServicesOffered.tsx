'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Button, Card, CardContent, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type ServiceItem = {
  title: string;
  desc?: string;
  icon: string;
};

type ServicesOfferedProps = {
  heading: string;
  buttonText: string;
  services: ServiceItem[];
};

const ServicesOffered = ({ heading, buttonText, services }: ServicesOfferedProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <Container maxWidth="xl" className="pl-6 lg:pl-36 py-14 bg-white">
      <div className="mx-auto">
        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 items-stretch">
            {/* Intro Card */}
            <div className="flex-[0_0_90%] lg:flex-[0_0_30%] lg:max-w-[30%] flex px-10">
              <Card className="w-full flex flex-col justify-between" elevation={0}>
                <CardContent className="flex flex-col gap-4">
                  {heading && (
                    <Typography variant="h5" className="font-bold text-black">
                      {heading}
                    </Typography>
                  )}
                  {buttonText && (
                    <Button LinkComponent={Link} href='https://dashboard.happylocate.com/swift-app/relocations/pet-basic-details' variant="contained" color="primary" className="rounded-full w-fit">
                      {buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Service Cards */}
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] lg:flex-[0_0_30%] lg:max-w-[30%] flex"
              >
                <Card className="w-full border border-[#E4E4E4] rounded-2xl bg-[#F5F7FB] flex flex-col" elevation={0}>
                  <CardContent className="flex flex-col gap-3 items-start text-start flex-grow">
                    {service.icon && (
                      <div className="relative h-10 w-10">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    {service.title && (
                      <Typography variant="h6" className="font-bold">
                        {service.title}
                      </Typography>
                    )}
                    {service.desc && (
                      <Typography className="text-gray-600 text-sm leading-relaxed">
                        {service.desc}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesOffered;