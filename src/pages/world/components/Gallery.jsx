import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useState } from "react"

export default function Gallery(props) {
    //Carga modelo
    const { nodes, materials } = useGLTF('/static/model/gallery/gallery.glb')

    const videoUrl = [
        "https://ff7e24a20a30087312a2d3771e4ff1bf40a827d1fcdf4d5e2febf9d-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRGKujsi8Io8N_dKMa4RRLjLliW02zsSudUryadRvjbzuMCNeeN58cV1aWEPk1PUvCCqL5jbZ-0ejbd48JxMfwz_VD6DYDVQeGCJTusrSHyqcbTus5WgXXo0p0qS0JRNIAMiyrjTGK6qiI0lTxWixGMIKEpjk0VX-YP8Pnsr20XMrH4Rq4lqnVM6NaMJhOd0CiAvcvBME0DWTHPvwvalvbMvZbg_rwxoCR8HVj5WxP61ZyBLxkgkVQBlxNO8OfS2ouwQiEBOAvR3Ea3bUYIQLUBk4Pq5AK6YOtbKmm3WllX9L-gZ5xDRyNE7KoZHfRUaS03LLHJfu10xFcBYDRVlEkqqEALSZmoZqLuMHLB6AMzSFlhNjkpahiE3rj4agfUdK_jThxC0v_b5SpNtCiMOi5pu7WgQQ_Rk9ajKH80aB03405-7UWR-d1cUjmewRiSzeHNJLw8k0ylo1cggDcYTAV3p2ECh4x9lzoHmX2jVWZbZSxIkG7u94rsgpCArbzFkfoTbChRyc1hCzAzvhFQDsfVULUG3VlWXmJhX6n0cvlfsfcpNsC6Wis3cJaNcow8looHviTJ0Ng3a_qXnB87cb_-vqwZ4J_Pz7xSWW1wQAUw1cgZfJTLG_rymi-PelvMCFRTGvrCebn5J14OiQ90RcPT2qN13ctf1zFX-c2tsrRKwR0NI3mTWTULhoe-dVpe7uVM5CyM7vYpbPCQN716ApgE5SMiNTVJz28BXZE2I0ekcTDkwOXOBI3VyAb16bZukwYgpTNDhjOTnUjYnWL6kA50ZkAYff17w8Dj5mEcfqCVZaru_6WIxKVg6m9HRZnsMi0fyNMV4oc50f9M2s-4FyzYA9Blhk7j4ZpgXAeK9o8SMWqKpBlgiLCBOfc8uTKnTYulgJipjnaJYbBn2bu0joPtA_DJujsKU3qoffMBsZcyBIKuAdBx4wS8Bd4Fma2innwooA7rgJ2N36hmJ5LspbuEthoaS1XGZExLN0_-tCM9uzOPrYj_ebdc62Ixb-lOSivIkDVCC3HPaBOEavrFffXEPc0XzFtQNJXIV4OJnAkp07QwSHvuOFyXtX6rfUhjY_iPaiFR3CN7gZR0evh8VaVCtAS5BNoB_HedTYS8HiElRHJb47_IySTbrKGvG_MuW1Y_yyqs13_7upRFqGn2H8dieWfAFfPB99Bw-Veou-LDkFCPVjtSlfFsvI1A4Ty-K6wz3arJgn0puCFMcpPVAMGV-VrsmIuF8qMLdhlGiU456-DeitmlqOMME2ja8&isca=1",
        "https://ff602a5435619299ac6aa5a5694ad3b1917bdc90ef256b7e636c073-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video2.mp4?jk=AYvHSRFwqLGYFHbjbo_eULg8TTkjCb78Uro-FMB5ugC7Wnq3RVyq_BRgBiCu5SvNhT2yZbZBidLheXIpFfAVkmEtUwolp2H7VZ54qHbeRuTacwXQsJMr7iEXFATOiHYruInAQtC-QYJD2OIkRj1w7XvJPR7jbJT2e--JH-CEabiUDfAQblo-bVvQ4IWCZAsmtoETqYbfGbTYVqVskE1Or98I_HBLfWMnLTRgMa9UDjeCmzGDZHNqYh3n95yh_MAmSkkebGnN1tJTHnNrR9UtXVntJUbbeCcZWGPuZiwMPmy24QO-HaVkBvwYT_ToreTADYQDA2C2Iu-TPD2AUHVE_uIZi4gNm-t6ozJ_KnzB9nBN9LBiisD-oIHBwoeBZRD_Q-rlscxcjj4ksSvTz7gs0RHc9EDFq0VeTyMXbGy3VehVxJIpSzLLs9Da_aT_wyAXR-FB3DTAHqBRb3FKOuf8p__Jd49-l4JhfxSeUZIhbwwBiFO0gxzQd0odMclewHWMHIfOc6u9WNsMBQ4jUOoW9BHXf2hd6IWMpqeuGo6vVlpELl7zoz-Eq6jEqBzBdGImzFTXCsRrQtcL4PvKd-_4_FxKDf8n4u3lEUtrxRpnxKIpI-3GR-t_wGvL7YpxJjn80oXJT3wC8SGDPrdhwa-3b77cq04lLO98VMUy0Z8gUPlnx6J0ungyBXGzLRhx7wRyL3eT9hJLM4OfKS6kZ2bTBrGol70mZKKwGXpW_7WM1aVBAMoR7OabxHX12AS6Yb7mpV7wcI4YuXWV43p9ytiD7o3SHKcURDjaQ4lbSfqZjYdVz568CO4Zf0nAtUyZIvTyt-eTt_-rK15VGn4WRi9ShwGcWMXa_C1NE2_m9dv4_2y0FjJsHiN1-yi4L_s79f0mxrkZo385txt7IE11PWC68Vsp0r-NxsTbqYrqbQviw56JDlRqy9CxOAxJzNFa6qGQVzUqrarlxXAQf44IbN5G1VK9AwiQYphmGS1zJLJK_Lvw0KQ7AM2y36ojlzOvCzsNLMo3-pH83lmPN0SF8c-kX2PUMaLed99S62dA93ULsf-MoMNpKEjKrULjleYtb0Uc0zt5NXdbNdSORtXDA4yVERdR3JnRMTXI7sZnoLWAmgmSlxbdMUXwYqehRW_IJg8GWCLQ4PjvUB1ItAGOFo2td93P_bA3a5W2MLGXAJ20TOiF8-ddJjvi1mv4sFioYxPqpwe6xiihk_NqprdMukutmlZpHDdoUtGRIN9psfCRheOg7SeeAVJOZ6Inf2Sy6lbT&isca=1",
        "https://fffa0be887319cbb6ab3c856cdfe921834488376b3f02d1bd4d3ee1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video3.mp4?jk=AYvHSRFT8EPDBCrSAGwdfqI_UMLtC9A7n8NKWFIxivGkwB3MSkE5fPtW-_SGHlKhFZxUQhafHwedccZv0YTUnnUnlUM72zeLq8X4Jh0Q-6yaQIClzqWxKxgMFP0zX57dMh6chvNIWkOsKxILDowE0dcZ8leqfL1xJdI94YrsYlHwUWRZWO8Fbthgr6mZAZ1pgmhYiseLjLYxchYovKatzXadsso0Ot2epIuYkXxhp6FErF9Zm-4Abo6FMTfeV6abMW8IKXjZh5Hyx0g3oyyl0Qd7WhwUOph0O59AjZQZuafbWi3O8BUfmgwLpBgBAvsRnrMznCf5Vgg7zEq_RBznWYc-ZaMpyTf2jFd5quz3hcG5vgA5YG2M_-XYCR1-Yt4SvbivGp6meai7xDtLjeX0-jXneH2w32v7OKUFXmPZ4cthqtahLSDRBOPutJjXAl5ebtd2NgcJf6XrvfWM6ggotYxOERhJ7AEDZ9Ik2NIO7DX6jOtTiq6AaYUl_7mqWu0ibQRujdT85KTSIGPWG9izcxWDfNHvJwcqtLUpRVob6MM0puEliokFYUToimmOZKe18rp_ZrBmykjOe4Hrs-y2xKAYGonl2GoNl-Pk6QgIvcF9DGPMXZ787_zn1Uj674ed3ymwhGuo3cFY4nF3UqfUv7rbV7tJLcSDS-wxuNwFVGB7JsvG7CvZEyK_Yslh3zAcEbY1JgwY5gXcTS-43yyDVICLq3mLHPvVP1qgJef4YB5scwxOgX6igQR9PK6YeuaR8elQfNI5Pk5SjsRVM5a_PluRO6RaLw4TguQaikj9jE2lji6XFjUxklIfQBHuEMLVYwArqt_uSinlLQjUWau0wyeKvIT_aW90ka0UrQg4SKiq9Uxyzw8WyftHsxTzJDmORSsoZTezbQOb11cxoGEj0BgJZExi6Yw5bmsdoLbwbYBV9fXBmeJTONOagGmZUMXjAr_7I7wjiqkBrjxXPVbg-XlBJ0EkJZuuPPw9tl-k-PFkvvUcbt5PFAgD0YPORtdYeIf-IfXlIGYG62TxyVVT_70SjkLj6DjHWVhZbU-zcmRHX-rK8iKMnnXwiFX8jMjykkIpAG9u65xMw2kfTc5uIt9iBobgpIuKKNdpTD7yYSPXSWYDLtVb8Q-wZF0bk6gmr5Ej6xCDAv6HLeBCngyifWBqyKgqVJtpZ0HeVJ1DmzlkicyW5N0g0e362e--yZqN5GKYiVKrzz0IzVkbmMap549AMcSfIhA6ZNPVb51xP7nImUd-tEE_k3vKv_ibgJnG&isca=1",
        "https://ff928b704a41e2762446ba0657c76848ee42923e2f4e4eaee878abd-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video4.mp4?jk=AYvHSRG11_uTGmb1ujiQkgXp8os5aE2_1dEhtGFv6Lg7sH8XRvcKIC4Pi6k9McRKvjrRPGnU59KQ24eC5BrMpVGU_fp51u-SpprKr-C9zdeHFWHxUZ_wbHG-B6HjksXcRI6DmbI539lAV1pDEUp04cnNJZn6llifleLtq84Liv7PG0O9BgtOTiLLhh8atmc-8Ge16qg-tKdIz3_RBtUwHEQTClMy-h5vMde1CExetW5KSJL2mPVZmkKqKh4QbAz16gp7LTMK8YZp84brVz07ojnvKiAjQGx1UpmoKQw50gsuUC-d3mTcBkLpQpEeLEHOVZksEJei52QTmitl647q7np9l1FHU-OVTbPWtDYmDZLRsMNjVdLmlNiIw0OeMWfol9u1wPsFrru_odDhbR0qqSfD3cKZUOY_8k-Zxlv6ZYByWX_NYCXOBVR2NCE6knW7RiMGn1KJQjUh-8ltS9tTkC89VsPtaDVbCHBOdcaPpNNmSDDaeISnwTP3ulF_LNLv0riNIbGar6aN6kwmMRcZsb9_vIM8DRCn3Gjqw-Pkw0LcXNG0alUShntJE0j_p0XXPJ2QfP96eT2LjMAHdn6T7dFFWxEBETwhMrhRModZ8zmNDgyUx5Em6BnpSNLNRtZgPqgNefvWibPpOAkSgZOAOICAj0xTS-EsBBuI5IVlx9eKYJhWyCvvQPFRPj2Qj5OhHutTfdA-cjsyNOv8R1yiIaqTIYnXQYTo4PsLEMqbY_VqbNkPwrr2IvgbFaAC17PFZTjXTW9OyHUrmekOajnwez_yC5CrlyTwZFie324b1aG5igOdNaN6is2aBfIzWYd1ZlgcD7sxd7sfKQbFWjjyaRCzeggTEor2mgftdJxGqZc5hCyNqYC4ut_GjS4tx6GCoQPxfdgka6PZCXjZwiymYkUvtccHtLMuDEirnzbHFZl0LRrULcoyDqjNhUCPNCv2isFLR4-Nh2xvBejm6r0ZJIhf1h3OaJGNq0-CvFnviS3tGXvNGE51EcfEE1RMOL_x_0cFy7WbmYZnciM0yIVgiholJxKaDwVKMY2DSlZ90W-Cwz-nL0XLfjD-WXzGGSH0YYy2Jr-XeB0ZM2_RvreXYwM_p2aZBopzVmX1RGPCl8OXqedC1-EidmAQlyWma1yMI4WRcOGk0xcY9tBHCml4CwdbZdadaxv5UFVUQoAfiMo4cdZHG9QyKCKBiIl4T7Y46vZDSn2e_1MYHQKqvmAJUYNbP-t8oBjNVEvUCI0jTqTRCCYKmvoxwq8pWfAmtHhG&isca=1",
        "https://fff374c7af3990e8751dc1a138031ef6ba172de36eb2c0189bce5fd-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video5.mp4?jk=AYvHSRGUSCCXMsaUyWxt_FLDfrJtw7KOm5_2ikJw0HHLSJw3GfacYPAH7-WFWSy9XyssrJRX563yWPE159Bb3x3B5uYBtCAGT6b_7zpBvx9xJhgJgZPp9Ls39hqVnlzw7SzHg8yjT9IjHekoTUjjuy8Xf17Dom6bH-BujdaAFoXghk4YjmXBwECoYZLn7QUDNzWklaPvBj0x9iSkFnx4lNmaIjIH95EUUY80u7sB9LMAcwN6FnHvOJTjmRAv0WUNLc0Gnxsv0C3ouvWl706lRV7Ij7RHGsM3YPfkwFEFRnPsSFC3gIV04yy6FSFVlSb_RNsXTRp9LrTKbh567k4CA23-uxaGlJtHg2Oy0IlVFB1SOIuPossnZnmWEbvYJAShLrssYfQwGB_fYuVeN7YG5IXwXO6nzOAtsZyLsfj-vFPPeLJGuR8uX8cJpo-cbtUUD_uOmFFjxcx6ltGiTGG1o4Cv4LJ2FBuJS5PxJnx301y9wckafuRsVK5AmANj9dykyvETtkxLy1EP3iCvCRvEucjK9FOLlqTdJXNErk5LGb3mN-4RZlguC-AuUIAEgAfaV53nVZjRRN1qQ2lHFCZJJd4nVYUsS7RYYCZ4HUYDMebSjTq9XsbqeRG3EnXOa0vqf1JHKly7cvPcTvWaVb-TmqqyKH6DfM7gXk3cA2M5jGNTk4zC9M-opgQ30d-YqxBwI6snPMbe9-WxLCSbumk7LEEnFbU68YgNGihkc9zNuGKgHy2GHbWeXLtO-qSvboj223pGMEYW67GmEKb-CLv_CTUaPRSm6yDARz8uW0PGoz1sf9oriHsaALU3RxhmW_M0kddlgWHqjbpOh6w2WvIN_YDEictvrw4U0z42pixmgaBZUQMq98qUjyzyJ2ivzAo0-EZFneqW0YMEEaQG3vFCPFMvT6NjKjCJvrax1fBR-DaTe-9Uf_wNQO8KE7GP4-MM7QJDiC4Jhm2TlENa1AnihscEoFtzT4bgoWEWfOXV5brUfvhw_U6CD4OHYbhjQkTupSQBiP5t5uju_ui7S9lvWlAqMPGGJUDYOjd_3i1aYWUPvIGkN9rvp8_sSWjh_zG6qzWt4xd-1PntPmeSHTMIHZbcWXbacVhUo2dy-vd20v0EEex9lBPyirFUwWKxH59oF1fSJ4eAQZlBVS32X_gsWscqUUBeu1RKniilaSpK1dvT9XifmbzxuW_3oVt3mPM5y7WH-iofQNeLkY1iTRjWhryczVbBBhELabczsHmUo5CUnQ9Rl63Eyc1Oj3seIALt&isca=1",
        "https://ff94030cff2bbbf3bde757020a702bf50f3a44503802d70307b5184-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video6.mp4?jk=AYvHSRH9blSluAoCvIWjkL23PJmSeU5B1_6s1ZT3TLc8sTVlieEtjT0w_lsKUr7pFGxMdE-C7EoGs-4rQGkoMA6_qVgNjtF6qDyVl2STzXeFXhXiIFn41hM9Y_b2VSZnBY3c8emlhEUFcCetoaOHSujvubnLXVYTqiC5qN2KrF9tAJvE3qchDBzYpSywvsqrg_BubywH7_WnHB4_V5ArnPk1IZt-rR5dCSd801LtNicjWMF9ojbh2HdAfQvlVLsNtuzMhmwN7j_T5Bu0LhjRtO4zu-My7L_Fav0HqMQcWXvVeBxS95okzyVkJcgIZNKlCnmeYoN5nW05oLzwo9bYBgUfROsxAm-jIs5kbpPlriv8qJihU_43oF9jjShiA8pg_Dj_bxGOKq6Gu8sti1pfdMgVWJBzZviE5n4DPr2N44ujEQjgxkFTnm162jnVEld07q9UjArD1gGxT2oXzfH1IFHVZ_yJ6pZA1IWM8wCWlGpXKlWO9tEQCcIZg6enVPEnwSZCT_YLIxqiOTFj4Njf-bbB3_ukwGC7arLBbd0hxLQWLZWCp4a8V8qaqmYQtQCoDnsKIrr9OrC8XotGQGsV5Of4ABRQsEG-92ntmQoDOX2bhG57TWgn0BYQOJ2-wR3Pxs1y3ohXjMvQ-XDiOAnLY-fdXMOKucwqb_M-JzL-cn04Z1Jtk7ISswXoz5pFU2xHxLhyg2F6UTtWmUMNDXn8VmZpBX_QzrIOOLc6mKgfZ4LL0MIAsbmG4aBZGDjaMJbZK4ukC7BL_2hKer_FI9dI6G62QnK93-a2o8rCdogCbZLRkGlWHe76XoPAgio-_hQV67GXi-BtsnKwNgG9tOwi6jLOpa7BQFWjBlI9yNhnUKTl53v7XGyPnG4IyP7SMLh-Eakyj3ItgEcQGt5aK_6ubGCaVBJSA7OwmJfkMJQHQX9E7oBO8aZ7y0EQ-rb_kqBImIBufYQ-cVfPNoVSB9rzYFZ_wyDr9EgyWdCnUx0i3k5Sv2Vw5UMpFfNxJlTcjQgs__ejkQNJHxZPPKHODqRw1vtLgdfuy4mbJ9ADtPE3ZrKbvbzMX66Yb4toao1OQN4CHi4KMaet6Us5Y929XC3q71p_JmeMJuECd2nGBLfjDG9At0wZyheTjQrVqt9sjDFASw5458tougNq-pXvEVUk9WAdYuY9ioENgkeQWpd6wYLAMd3gGxy_pC0AfXNsmcN_OLz93P1vDY2XlNI1_nXcklLcv8TiyfFaJrs25KlDsMLZrXxFXqKMlbLzGSSKII1F&isca=1",
        "https://ff4aef0cf8eba19294b9daf6636b312ad0e15c4bc9e2c2c38c15844-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video7.mp4?jk=AYvHSRFyln_FObjeBRGIsXftqie87eROFgy5lGsFOH_c8JdLr8McD81__YXqEe1BSPpfT_fPWImye09wwri_1QiUeNZcXIEs2EYzzCHJBWhJm5kpzHZhWSdWAH-dwkRhXgbL76F0BKzhDhS9obaUdIB6SJs9t494TcgjtLQTIOypy4QOZrh7ds_lAuzotm6lgjMa9NpJaqb-yLnu_4FDthhd-s9FHfrEyNp18KM6XnyFFXTLErGZsbqB3dc3RtO6fpYPdHmOX7wDxBlD29UXA_FtCtsts3B-CmUoy1Lfbix39dhG15seblkeirBur5TqWuziy2HkAemvj3YJPCq2mUkqVBlgtQKMSrEF2SgY9e9JlahUJ9_lNw0OIMaKAR6XGTOr5-T7dE2iIgiMJR_anjKFqMwmFvs3YWsdckYDGBTPzvAY-g1MmJKbVf27HEBp8FXoJ5GVHwwyoh0iEQduuYNOh3VYgwSmNm7nPSZeFX7v2jYGyHnEgeUSV8bpHHxlxvaCwRl_xbd0LpXxbM8qjEuLDoP5uhMRlzCwtl2bzZ6dkBgCIAAKekg6Mi0dgJ7rVNay9PLCFfZT0BMrVdYcj0F0G-nv65T7gYy8-rq-gngQSiw0x6ytd45lWXtuKfMoKFau4KKfkq1ahFtn4CM2tZW8B8Pjrgf9I_KgCFJayzSfNCYySLmNKMPcuxH6dvckV2LbED0C-3KUmCqZ4Y9JeVh-3bORktmaHg6yQ6xCOyEQO9f3rx_4_asbIpFAWk9GXzOWgq9Uelp62k-V-Di8vNKralI6UWt9dec44F7j58EGfJuDzdbbEn8jUEBRAnxyHRgg3uCLyfh75NJjcPb2GnCPFWwApXKDs2LWae7p8hwrT6DnTkczTSSflXwInV9kH96vZs5wCwvTKnKXtoDd8lkqJYSWmAauIEN_SbOppGvaqXzHSgHIwYsYz5EX0-duGXitIDLPHTH08YPFnCvcjzYr920JMB2wKwMJ_UlXf_jY8VDoYnUqYN-DpWtLWAmjYNm1ChHGqxPAAuxkcJAfltvj5aeP_AcE2vdCblilrDv1vrWchYeQGfL46KHtjpaLNbiIJ-UqO3EljP8owPNauZ5NvIWvq0BnAgxdhDVanUCTwG-E0qRJWNk2P8_fcjlmay6343Mr7t9Wcp2t69tapIqY6CTEQQHEk31epYSXtwVkGukUX2V5A0DNz775VuK4nWdi6Qxj-YDGn1-xkmIm01jDgyb9AjqwbAWpktJHyl14Iqopei17Q2ZAhQuZP0uw&isca=1",
        "https://ffbbcea398ff3f2f6961f050297ebc8b07d16c9e3619a9535265c9b-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video8.mp4?jk=AYvHSREEDXwTaTMk29wV7qBtNfDf5mk5uhQ9g37PYQuPb5bxVdPBtvmUaPof74eqUURkxNhBDiLEo0tkPnCoNu-bi8Jsc1Rz6i5xAbafG7hqLxkbnxHxTa-KQLD0dbOb_Mc7lQEeDXj6mxKCelCXHHJGNzxuYzSmQQ0R2aKKbaXFWJwUp1bZMOBp70_hfWGou4972PzuSV1T5P1NLnjQ3PYILAVI_wLm0Hij8SahhkujYLii3RllxE-kXIvPhN-ARzETPI1JJxavzIp1egykpEenr2tDe7pJTsPDini59DtHlLgRIJI8TNF9ZnFGQ7HGYCoQEB2zltQL3mh90hAMV-MwxsLgJoeUnVFnr7HpaaGUh-L_ReReLQSQvh7qK-8oFb6fDJMgYGnk2GILHCX3-iVdnVzZ1DRo9fM80h6_5mSwhwYudHTUUBh2xUJLDADpfg-wDYtxF4c-oOiyyo6daTf1OsgVfnU0Np139WavHYuBZLGwtexv7Q9uJ0uzvdDfJvJFEEaC68X_DP7MAsfPxlHLLwor33yxSJsg9GoAaKnwx9xhtfQPmysVT6UcJgID7TEDA3oUg6BDn9Axefzu6cJyWc-XFhu5QN84ShqzLkJOzANrxxYE6r7l474i3vJV6wAmto6ufCNgjY-g_HUso6fHNT9a2CVdEesF7ABa_EmRLAGnrLmKn8x3f8YUKgIpGWS81pGdRHGeECVaHYrKeevYvQgtfNk3qKV3DfG5OrccCqOe99xEq9KPf3IT641iQwevKR6g-HvwULx66SvuyP0cEYYuDjxrYcL2FBshV6d9jVb60CcQkcA4NpYoFTl4OokM2l3yhsRK6mgd9uM094JrYcD1S3E1r_1-3o9kNq9pjsrSGpOI7NAF21NUx9wwGKktAVZ4XqNKJ-PKUzDd1jzX9YfIxCbvwarfhjW5pNFJN2iMO88OrSoeZNggR7fsoZceqGMLEyeq4vFX7KSfEMK1VtD4dvKR5geACe0CPkhNz7iW6WG9xC6XFJENSfUQLGk-uZXzJV4Au2fhRaB35gMC4Du3sCn7RjY-AA1dCYoDFVODASUAPcWaKddG0YzzTJOqFE8G0yIqSpRhHdwLMnvImStTKM1BAGYmqf1rv7WPKz3K8EQf4LaYJx3G8NVyRxndPV_wg-ZqLwscY3d26_R8Tpa7iq6Uxt5k_iPdmKAStx5gG1pGed_XUmJJkPgkiz-UI01YR6bwBQ8InsBb8ojR3QJ7D4gyoIb3X2p8gXpkliCWoSH-i2pgu6_dJ4qx&isca=1",
        "https://ffee41a4cca51c349525d17e9af682225ae96f24028a507cb76b73d-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video9.mp4?jk=AYvHSREy7IqnBgp4b5MUwn0QqzFX7jWUrrYzSftwpT__F2vyOBURSt-YCV2MhxE-RiBECrml71b9lGUan_5poLhyPT5jMI-NFbhHfg6JGLlmcra1frv32J9ze_JdKajods9yYnaZzahZTV8WUYYEBJ-zzdZfy_9Lykiw_g8G7a0hcvoQiI3vu_qn_cCho7On4y-0AU6fBG-H5uzS3IRLglCpr7t5D5kzFWLafhMWK19gnBr7Vb71vWajjNlx0qyRh2yC6aqD9-paZtdMFQFI4vu84zl6GbjfRJrxrRcB7tdQXbFGiGg0i0WfKCrS9vL6PHEa4FXW5rBe28kVkDJ3ovGgn3Sid0nErC4HmNH-LpGsEsnFyMLTN9s7ADlnW39djmEU5PZtKZfoPPNWm0EofJl1rYT7fhKoV6nIR_9lIsxn00YnrAMc2EshtVt5vMKlso_J7GG-wIzv6lmlP3Xi_qM9nK3t5ZDQBqi_84O9SybqHUv4O5YyVBuXDYKAhsiQ4zsysynLPSO3pjWD340Ysu5sE0CLJo-piktyF9a7zDN7lWwfsOLyC9Y_CAPb1rnCQeFJ0c7x45PmNGrtxu6l_0TpCiZMD44UbkBMMmSrE2-W3R4v0V9DDvzzRX2N43dJcd1jK_FbH0WzTCWxC0tIi4PMvzLkVSOy3MbLe_9UJkdvYbP06DpPTn7AMvpBdCwicGORnlyhDr3G1klPGaZvUx6jBJm09h0NZCmJxRLJkGIkJWBdg7HsS_hlOTTh8dr0xJ025Cnp-PDn7hzC5MXJZqGnqbykwFPtbQ3icOSamTjMLDGTQG1A2d48CLVKjHHm1qkTfiwNvY1KQvrB11LVWoRQmVfB07fi6Zc7sLY7JoGbC8UFjacZRn6bRzVYg4jkvvlG9vRZuqUDAOlsCktyFa_e64A0fPfjmenzZ1VU997GINvWl808Bk2GkKLptHYFcyKr62uF8xQPnBpjgKUkXfUS1HR53_h5WBV7tO9pm7RqwOJIAGl3NylmDebJidHuk--zXLDDyTyjCY26a0WGSG4_LVNbsK6hfvudiYzzomNsOQd-QQU4gY92CsFbyK-JPeQoGW5i45xnzI6Gm3IGvFCiFsjmWfBXIY77L-RtHsV-bJnOUnDakphr-cH34uGqHPi4jdGHjjDg5bRS4KU08_twMenkCdYsFHqr2i4D4mSnfvqQmVVrs6hyQ9CarcInwbtzQxcgEEs7ZjybzIlI4N7AlqkgsWDOT1-T_7-kRD_OuF0qdXQUmNjZPAoYwtjV&isca=1",
        "https://ff2d91f73df9d2f3ae3202342dce7d2167dda1418c99974618cc51b-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video10.mp4?jk=AYvHSRGegz5xW4on5yPG0TaNFtMPOOjLFx367vP0b99R5kc1W26xbCRHkiSOcMCpRu_RMa0FsAJ0c6GJq5tm_ZpSfVRXMjm0-9x7I3Iuc5IAheqWX2etlmELQFEVziwwpC_d4-Mr0y_VylmNpjHg1fpp0O8fo4_j9Em0_kxAFWU8lOvTvmHrZeUz-P76OlE9o9dSB7571ev5Hv4a5eD7d9fFyVegRNXq3s8OeW8CzMa1HA3Qawm9bBwOhOelMu0hItz561NhjdI23XtsfsSyiSW8ixCWA3O3CmykPzbid6t8t-zMEJC-00A3p9aINbpLwsxeDklsns_Ykit8GnNCd0Tu9U1D83IuHH3zmJsct_4M4tlB_C7kCIJte3UEEbPseXJynnW_0UhXvJUkFJhAfHyPfH1QusSwHlUdYWtonvbkn4mglASSApsWClPt6QxxMFsevJF2NmLndbNDk4gCGItLDOZ2DIxFUk5IIKvBY5oHNuKTNyOwYf2XHkO-HVlYWkqgsxnaWEk_KJnoYfQHc-iDk-gJ7__OMKZ_q-YDFHPu_um9YMV4iAFkjQj6SFDs0dVnIT0cUGJx1bFcIIFPY-sKHv5J24t5Ow41SVzuFrJGei-c-WM5eZ19-YPa7dkXHXCplLAoI36TCX9LbGiUsGOJ8J9aBHM7i40Fy25eX8CBjdQPFNAj4zj2rpoPHg0N8D0cltUwK--7nfa-QwKs4r6W_og-tEo_nE2z_8Fjl6r5Mbs5iwXcbWcC9J_VMh_QU6bnlinKRyjfltzWOUUdyEbAp4do6s30AmSLUlsDXGecTswOZAtrYY4LLVUQEXghovSRXEI6aZ5WloxsFsCqU-g4da1Oz3bosBB_ldORtp8SjCYZ1o6n1_Sr35OtN23NhDgOI2cxgBd3c6hkF55le4Ga_RNU-vD6XHsqHzZUzz0Hbqd391I30rz_aJ2K-i9-iODUn9UJsKhJaJIUi7mwDRJBNKu6Q9WDycdBy32PVWBfsIonPGBPSKozpF5uR-330PT37l4mYJGhg-S2VogptlgXVdAn88BNfPR-muhWxMK0t91BOZVERpIbhP5HBj36v-ZFsDnQXyDGRbY8cVBofS6cI_pYnRhPboL__tEAN6mzL5rU7K1srrdAXsATxFPlzwuKlx4ZR7Ua3lVnwkTEHb8kUT7O5mBmgbgS2iGXZEWe0ueMVT94m6SiD_Xpztae158wYJtTG0p_rY-H7sdJTymJeSYJr4RRc93UO9IH5zG60Ox9mmzXCJ1dzLSUv0Wu3w&isca=1",
    ];

    const poster1Ref = useRef()
    const poster2Ref = useRef()
    const poster3Ref = useRef()
    const poster4Ref = useRef()
    const poster5Ref = useRef()
    const poster6Ref = useRef()
    const poster7Ref = useRef()
    const poster8Ref = useRef()
    const poster9Ref = useRef()
    const poster10Ref = useRef()

    // Carga Videos
    const videos = []

    videoUrl.map((url, index) => {
        const [video] = useState(() => {
            const vid = document.createElement("video");
            vid.src = url;
            vid.loop = true;
            vid.muted = true;
            vid.crossOrigin = 'anonymous';
            return vid;
        });
        videos[`video${index + 1}`] = video
    })

    // Evento videos
    let currentVideo = null
    let videoPlayed = false
    let videosPlayedNow = []

    const eventHandler = (event) => {
        currentVideo = videos[event.object.name]
        hiddenPoster(event.object.name, false)
        event.stopPropagation()
        if (!videoPlayed) {
            currentVideo.muted = false
            currentVideo.play()
            videosPlayedNow.push(currentVideo)
            pauseVideosPlayedNow(currentVideo)
            videoPlayed = true
        } else {
            currentVideo.pause()
            hiddenPoster(event.object.name, true)
            videoPlayed = false
        }
    }

    const pauseVideosPlayedNow = (currentVideo) => {
        videosPlayedNow.map((video) => {
            if (!(currentVideo == video)) {
                video.pause()
            }
        })
    }

    const hiddenPoster = (poster, status) => {
        switch (poster) {
            case "video1":
                poster1Ref.current.visible = status
                break;
            case "video2":
                poster2Ref.current.visible = status
                break;
            case "video3":
                poster3Ref.current.visible = status
                break;
            case "video4":
                poster4Ref.current.visible = status
                break;
            case "video5":
                poster5Ref.current.visible = status
                break;
            case "video6":
                poster6Ref.current.visible = status
                break;
            case "video7":
                poster7Ref.current.visible = status
                break;
            case "video8":
                poster8Ref.current.visible = status
                break;
            case "video9":
                poster9Ref.current.visible = status
                break;
            case "video10":
                poster10Ref.current.visible = status
                break;
            default:
                break;
        }
    }

    return <>
        <group >
            <mesh
                geometry={nodes.TopGallery.geometry}
                material={materials.wall}
            />
            <mesh
                geometry={nodes.RoomGallery.geometry}
                material={materials.wall}
            />
            <mesh
                geometry={nodes.Frames.geometry}
                material={materials.FrameMaterial}
            />
            <mesh
                geometry={nodes.FloorGallery.geometry}
                material={materials.Floor}
            />
            <mesh
                name="video1"
                geometry={nodes.Video1.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video1']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video2"
                geometry={nodes.Video2.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video2']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video3"
                geometry={nodes.Video3.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video3']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video4"
                geometry={nodes.Video4.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video4']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video5"
                geometry={nodes.Video5.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video5']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video6"
                geometry={nodes.Video6.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video6']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video7"
                geometry={nodes.Video7.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video7']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video8"
                geometry={nodes.Video8.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video8']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video9"
                geometry={nodes.Video9.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video9']]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video10"
                geometry={nodes.Video10.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos['video10']]} />
                </meshBasicMaterial>
            </mesh>

            <mesh
                ref={poster7Ref}
                geometry={nodes.Poster7.geometry}
                material={materials.poster7}
            />
            <mesh
                ref={poster8Ref}
                geometry={nodes.Poster8.geometry}
                material={materials.poster8}
            />
            <mesh
                ref={poster10Ref}
                geometry={nodes.Poster10.geometry}
                material={materials.poster10}
            />
            <mesh
                ref={poster9Ref}
                geometry={nodes.Poster9.geometry}
                material={materials.poster9}
            />
            <mesh
                ref={poster1Ref}
                geometry={nodes.Poster1.geometry}
                material={materials.poster1}
            />
            <mesh
                ref={poster2Ref}
                geometry={nodes.Poster2.geometry}
                material={materials.poster2}
            />
            <mesh
                ref={poster3Ref}
                geometry={nodes.Poster3.geometry}
                material={materials.poster3}
            />
            <mesh
                ref={poster4Ref}
                geometry={nodes.Poster4.geometry}
                material={materials.poster4}
            />
            <mesh
                ref={poster5Ref}
                geometry={nodes.Poster5.geometry}
                material={materials.poster5}
            />
            <mesh
                ref={poster6Ref}
                geometry={nodes.Poster6.geometry}
                material={materials.poster6}
            />
        </group>
    </>
}
useGLTF.preload('/static/model/gallery/gallery.glb')