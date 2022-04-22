import React from 'react'
import SkeletonElements from './SkeletonElements'
import styles from '../../styles/skeletonCart.module.css'

export default function SkeletonCart() {
    return (
        <div className={styles.image}>
            <div className='cat'><SkeletonElements type='image' />
                <div className={styles.Content}><SkeletonElements type='text' /></div>

            </div>
            <div className='od'><SkeletonElements type='image' />
                <div className={styles.Content}><SkeletonElements type='text' /></div>
            </div>
            <div className='cat'><SkeletonElements type='image' />
                <div className={styles.Content}><SkeletonElements type='text' /></div>
            </div>


        </div>
    )
}
