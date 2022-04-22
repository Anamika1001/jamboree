import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../../styles/cart.module.css'
import SkeletonCart from '../skeletons/SkeletonCart';

export default function Cart() {
    const [profile, setProfile] = useState(false);

    setTimeout(() => {
        setProfile(true);
    }, 5000);

    return (
        <div>
            
                <h1 className={styles.Content}>For whom Would you like to get stitched?</h1>
                {profile ? (<div>
                <div className={styles.image}>
                    <div >
                        <Image src='/women.png' width={250} height={300} />
                        <h1 className={styles.imgContent}>Women</h1>
                    </div>

                    <div>
                        <Image src='/men.png' width={250} height={300} />
                        <h1 className={styles.imgContent}>Men</h1>
                    </div>
                    <div>
                        <Image src='/kids.png' width={250} height={300} />
                        <h1 className={styles.imgContent}>Kids</h1>
                    </div>
                </div>
            </div>): (<SkeletonCart/>)}

        </div>
    )
}
