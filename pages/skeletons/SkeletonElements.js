import React from 'react'
import styles from '../../styles/skeleton.module.css'

export default function SkeletonElements({type}) {
    const classes = `skeleton ${type}`;
  return (
    <div className={classes}>
    </div>
  )
}
