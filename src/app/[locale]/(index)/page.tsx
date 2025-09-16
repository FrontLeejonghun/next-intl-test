'use client'


import {useRouter} from "@/i18n/navigation";
import {useLocale} from "next-intl";

const Page = () => {
    const locale = useLocale()
    const router = useRouter();

    const URL = '/test?params=1#hash=test'

    const routerPushWithLocale = () => {
        router.push(URL, {
            locale
        })
    }

    const routerPushWithoutLocale = () => {
        router.push(URL)
    }

    const switchLocale = (locale: string) => {
        return router.replace(
            '/', {
                locale
            }
        )
    }


    return <div>
        <div>
            <button onClick={() => switchLocale('en')}>
                switch locale en
            </button>

            <button onClick={() => switchLocale('ko')}>
                switch locale ko
            </button>
        </div>


        <button onClick={routerPushWithLocale}>routerPushWithLocale</button>
        <button onClick={routerPushWithoutLocale}>routerPushWithoutLocale</button>
    </div>
}

export default Page