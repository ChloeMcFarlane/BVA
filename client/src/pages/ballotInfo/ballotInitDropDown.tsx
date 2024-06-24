/* Hardcoded drop down for ballot initatives. Styles the outer dropdown as well
 * as the contents.
*/

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ballotInitData } from '@/utliity/BallotInfo/ballotInitData'
import { Card, CardContent } from '@mui/material';


export default function BallotInitDropDown() {
    return (
        <div className='p-4 text-center w-full lg:w-3/4' >
            {ballotInitData.map((item, index) => (
                <Accordion key={index} className='bg-white mb-3'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >

                        <Typography className='text-blue-700 text-xl'>{item.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='text-lg'>
                            <Typography className='text-lg underline'>Proponent&apos;s Contact:</Typography>
                            {item.content.proponent.name}<br />
                            {item.content.proponent.email}<br />
                            {item.content.proponent.phone}<br />
                        </div>

                        <Card className='my-8' sx={{backgroundColor: '#f4f4f4', minWidth: 275}}>
                            <CardContent>
                                <Typography className='text-xl underline'>What is a vote YES?</Typography>
                                <ul className='list-disc list-outside text-lg pr-8 text-left pl-16 py-2'>
                                    {item.content.yes.bullets.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className='mt-8 mb-5' sx={{backgroundColor: '#f4f4f4', minWidth: 275 }}>
                            <CardContent>
                                <Typography className='text-xl underline'>What is a vote NO?</Typography>
                                <ul className='list-disc list-outside text-lg pr-8 text-left pl-16 py-2'>
                                    {item.content.no.bullets.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
