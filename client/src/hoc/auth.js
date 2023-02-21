import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/action';
import { useNavigate } from 'react-router-dom';

export default function Auth(SpecificComponent, option, adminRoute = null){

    //option종류
    //null -> 아무나 출입이 가능한 페이지
    //true -> 로그인한 유저만 출입이 가능한 페이지
    //false -> 로그인한 유저는 출입 불가능한 페이지

    //adminRoute 기본값이 null
    //admin User만 들어가고 싶게 하면 true

    function AuthenticiationCheck(){
        const dispatch = useDispatch();

        // const navigate = useNavigate();

        //useEffet: 리액트 컴포넌트가 렌더링 될때마다 특정작업을 실행할 수 있도록 하는 Hook
        //컴포넌트가 처음 나타나는 mount 시에만 rendering
        useEffect(() => {
            dispatch(auth()).then(response => {
                console.log(response);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticiationCheck
}