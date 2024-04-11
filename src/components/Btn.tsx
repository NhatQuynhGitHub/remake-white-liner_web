import ButtonStyle from '@/styles/btn.module.css'

interface BtnProps {
    btn: string
}

export default function Btn({btn}: BtnProps){
    return (
        <button className={ButtonStyle['btn-primary']}>
            {btn}
        </button>
    )
}