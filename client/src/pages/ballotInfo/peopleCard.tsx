'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';

type Props = {
    name: string;
    affliation: string;
    picture: string;
    link: string;
};



const PeopleCard = ({ name, affliation, picture, link }: Props) => {

    const router = useRouter();
    const handleClick = (page: string) => {
        router.push(page);
    }

    return (
        <Card onClick={() => handleClick(link)}>
            <CardActionArea className='grid grid-cols-2 grid-flow-row '>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {affliation}
                    </Typography>
                </CardContent>

                <CardMedia
                    component="img"
                    image={picture}
                    alt={name}
                    className='object-cover w-auto h-48 sm:w-full sm:h-auto md:h-auto md:w-auto lg:h-auto xl:h-48 xl:w-full xl:h-58 xl:w-full'


                />

            </CardActionArea>
        </Card>
    );
}

export default PeopleCard;