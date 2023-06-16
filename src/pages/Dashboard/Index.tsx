import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './index.css'
import useTitle from "../../core/components/Header/hook/useTitle"

interface props {
  title: string
}

export default function Dashboard({ title }: props) {
  const { defineTitle } = useTitle()
  defineTitle(title)

  return <>
    <p>teste</p>
  </>
}