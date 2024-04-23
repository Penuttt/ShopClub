"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import SneakerPlus from './image/sneaker-plus.png';
import Box from '@mui/material/Box';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'left', mt: 10 }}>
        <Image src={SneakerPlus} alt="Sneaker Plus" width={700} height={700} />
        <Box sx={{ display: 'flex', justifyContent: 'right', ml: 7, mt: 30 }}>
          <h3>"This is simply a prototype of the idea of a website where everyone can buy and sell shoes without restrictions and receive 100% genuine products."</h3>
        </Box>
      </Box>
    </main>
  );
}
