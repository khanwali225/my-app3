"use client";
import React from 'react'
import Link from 'next/link'

import {useRouter} from "next/navigation";

export default function Name() {
  const router = useRouter();
  return (
    //React Fragment <> </>
    <>
    <div>Khan-Wali</div>
    <button type="button" onClick={ () => router.push("/name/address") }>
    Get Address
    </button>
    <br />
    <Link href="/name">  go to name Link  </Link>
    <br />
    <Link href="/designtion">  go to designation Link  </Link>
    <br />
    <Link href="/">  go back  </Link>

    </>
  )
}
