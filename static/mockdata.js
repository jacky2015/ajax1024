import fetchMock from 'fetch-mock';

fetchMock.mock(
    "deallist",
    {
        code: "200",
        message: "ok",
        data: [{
            name: "song",
            date: 1479198662,
        }, {
            name: "ted",
            date: 1479198462,
        }]
    }
);

fetchMock.mock(
    "/panda/api/wx/openid",
    {
        code: "200",
        message: "ok",
        data: {
            openid: "1239812093812093da"
        }
    }
);

fetchMock.mock(
    "/panda/api/wx/jsconfig",
    {
        code: "200",
        message: "ok",
        data: {
            appid: "wx67e2a9c6db384411",
            configsignature: "76422e5bbb89f8d0defdff07f4d82b36b2b41fca",
            errcode: 0,
            errmsg: "ok",
            expires_in: 7200,
            noncestr: "eu9a2s03ydfn077ia62bwy812at3h8fi",
            ticket: "sM4AOVdWfPE4DxkXGEs8VMdD1McoIkDTudNDnFxT-c",
            time: "1478661991"
        }
    }
);