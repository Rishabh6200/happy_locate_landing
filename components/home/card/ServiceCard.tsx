import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
   return (
      <Card
         variant="outlined"
         className="flex flex-col h-full rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
         <CardMedia
            component="img"
            height="150"
            image={`/images/${image}`}
            alt={title}
            className="object-contain m-4 w-[91%] h-48 rounded-t-2xl bg-[#F7F7F7]"
         />
         <CardContent className="flex-grow px-4 pb-6 pt-2">
            <Typography variant="h6" className="font-bold text-black mb-2">
               {title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 text-sm leading-relaxed">
               {description}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default ServiceCard;