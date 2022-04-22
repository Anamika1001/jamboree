import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../../styles/cart.module.css'
import SkeletonCart from '../skeletons/SkeletonCart';

export default function Orders() {
    const [profile, setProfile] = useState(false);

    setTimeout(() => {
        setProfile(true);
    }, 5000);

    return (
        <div>
            <h1>CART</h1>
            <div className={styles.image1}>
                <Image src='/img1.png' width={700} height={250} />
                <Image src='/img2.png' width={200} height={250} />
            </div>
            <div className={styles.image2}>
                <Image src='/img3.png' width={900} height={250} />
            </div>


        </div>
    )
}
