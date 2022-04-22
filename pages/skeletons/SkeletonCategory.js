import React from 'react'
import styles from '../../styles/skeletonCategory.module.css'
import SkeletonElements from './SkeletonElements'

export default function SkeletonCategory() {
  return (
    <div className={styles.image}>
    <div><SkeletonElements type='image1' />
    </div>
    <div><SkeletonElements type='image1' />
    </div>
    <div><SkeletonElements type='image1' />
    </div>
    <div><SkeletonElements type='image1' />
    </div>

</div>
  )
}
