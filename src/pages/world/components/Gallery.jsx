import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useState } from "react"

export default function Gallery(props) {
    //Carga modelo
    const { nodes, materials } = useGLTF('/static/model/gallery/gallery.glb')

    const videoUrl = [
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
        "https://ff6e5ce61a53d083fe3c9eac1905c916b7a6b88526face042dedfa1-apidata.googleusercontent.com/download/storage/v1/b/domogallery/o/video1.mp4?jk=AYvHSRHyJKHysSgca7LIh3Am_odifMGV1pmIZ3Mc9V5a7EZEpelqmSu_rc-Dx97QGHDAZJBiUavvUu8cEYkI8Io_s2XlUWyNJLlNTwK8Ws_YlS2_uGp5zVJ63-rzSxNRVya9ZIMXeYuYJyUuW74IjTOxU8iOgr41WRjHHln-oYfWFZbOOqOkaM_36O9U51NIAkMg6kfqQEmvdeKINQZ_LLDUBdjm26y-PPoMpBfFwzw4n2Siwy29njzO_iZl8wfGC2XgewvtA-bRPny8ZDiFFErtIi8DzVPniNuUxWSm0j1KYELMz5ww0b4V9JeJGO-ziUmvg8ME5-Y1Gi3KpU_0Bu1rniwcS334Nbx-zN2pRsQgCvo63HkkMkdUQQnrSzfMbJZyhwrzycr5mwPqMdMs8cXq9NxdtqhSla9HImvOxGm71Hn7maO8jlqHROkSfFfuG7HmVPXZCMyK4AXsgkNVGsq6z04aM5YU2neK05qj7dS-WP3ZyAZiHxcYw_XXOJUJuZE8JbH7--R8JV2dv_IGzu37fxvaiFemxoS4zgtczrG_tBmoAAsZmG10iMeX7SpdEQMM1zfu0e4emefJEM5er27Q10MR8W2ThcKniynXu3beOpzLXwmUS0lG1inGT21_eeANw2aPW4jKAzMnWXCPAtrIdP_-kP8v-YUbgoZTizOR6pP6kyhnUH4bmUMcBOU9xJEEh8UYBWSLUZq4qeYy4qoqSpZwxKAQXn4SWkdiSrnOry5Y_02_bA8wD5qq0cGceWxyVTb4sFBn2fEdaZ_lUT-2hxoXB6Au7xjVVnYX2Mxnd9YsFit58qZkYCD5U_Td1U2n1iIR-Eqr13E2kcJtaR5exUgAajgpgM_NmwLLey6KO14zEN-OTJrZovee39fA0IppaD3Eyvm-xg15rMtf_3t_CGNr_lp4YM_4svAtWiAJJUHS4EyQ9A-HorwK60QaClOvkXwjDDWvI7qDMixVL8mDZ8fdKj4VO6nmaJL1kivMOY3dWNkOeC2Q24vOk_2zMhvtaBn4YF7DXt-mTkDvNiDtvi4g35ddJj5R28iZXWmETwxgcoMfPqfpWjoWLLNjBqDJsYQ1LO6uCMmOnlM7VeZ9tPtzQtU6Dyqd0pGjRu1AI2NZvK5AU1Kh4VS9BkHzBLQPQJL2iFpgClJReI0LN7fmNFlUrRncyR_hoNdbmG8mHHsYhzUJ8PDuFzBpPLiFDP5mN5JXupOXEc6uDtmmRwyS4ZAULm7uslBXAugpd7R-KnR9MUzgiQUPEGTHDdgn&isca=1",
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
            vid.src = videoUrl;
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
                    <videoTexture flipY={false} attach="map" args={[videos.video1]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video2"
                geometry={nodes.Video2.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video2]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video3"
                geometry={nodes.Video3.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video3]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video4"
                geometry={nodes.Video4.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video4]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video5"
                geometry={nodes.Video5.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video5]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video6"
                geometry={nodes.Video6.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video6]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video7"
                geometry={nodes.Video7.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video7]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video8"
                geometry={nodes.Video8.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video8]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video9"
                geometry={nodes.Video9.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video9]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                name="video10"
                geometry={nodes.Video10.geometry}
                onClick={eventHandler}
            >
                <meshBasicMaterial>
                    <videoTexture flipY={false} attach="map" args={[videos.video10]} />
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