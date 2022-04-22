import React, { useState } from 'react'
import Image from 'next/image';
import styles from '../../styles/category.module.css'
import SkeletonCategory from '../skeletons/SkeletonCategory';

export default function Category() {
    const [profile, setProfile] = useState(false);

    setTimeout(() => {
        setProfile(true);
    }, 5000);
    return (
        <div>
            {profile && (<div>

                <h1>What Would you like to get stitched?</h1>
                <h3>WOMENSWEAR</h3>
                <div className={styles.img}>
                    <Image src='/Black.png' width={200} height={250} />
                    <Image src='/pink.png' width={200} height={250} />
                    <Image src='/Black.png' width={200} height={250} />
                    <Image src='/pink.png' width={200} height={250} />
                </div>
            </div>)}

            {!profile && <SkeletonCategory/>}
        </div>


    )
}
