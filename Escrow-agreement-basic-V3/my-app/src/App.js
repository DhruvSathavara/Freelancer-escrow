import React, { useEffect, useRef, useState } from 'react';
import { ethers, Contract, providers, Signer } from 'ethers';
import './App.css';
import { ESCROW_CONTRACT_ADDRESS, ESCROW_ABI } from './constants';
import Web3Modal from "web3modal";
import HomeCategory from './components/homi/Home';
import FreelanceEscrow from './Escrows/FreelanceEscrow';
import Dispay from './Escrows/form';


function App() {

    return(
        <>
        <HomeCategory></HomeCategory>
        {/* <FreelanceEscrow></FreelanceEscrow> */}
        {/* <Dispay/> */}

        </>
    )


}

export default App;