import React from 'react'
import styles from '../stylesheets/subtotal.module.sass'
import calcPrice from '../utils/calcPrice'

export default function Subtotal({ subtotal }) {
  return (
    <div className={styles.outbox}>
      <div className={styles.subtotals}>
        <div className={styles.row}>
          <div >
            Subtotal
          </div>
          <div >
            Rs {subtotal}
          </div>
        </div>
        <div className={styles.row}>
          <div>
            Shipping
          </div>
          <div>
            Free
        </div>
        </div>
        <div className={styles.row}>
          <div>
            Taxes
          </div>
          <div>
            Rs {calcPrice(subtotal).taxes}
          </div>
        </div>
      </div>
      <div className={styles.row + ' ' + styles.total}>
        <div >
          Total
       </div>
        <div >
          Rs {calcPrice(subtotal).total}
        </div>
      </div>
    </div>
  )
}
