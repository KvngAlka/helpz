import { LINK_TYPE, LIST_TYPE, OBJECT_TYPE, STRING_TYPE } from "./constants"

export const intro = {

}


export const introOptions = {
    title : "How may I help you?",
    type : LIST_TYPE,
    data : [
        {
            id : 1,
            data : "CITSA Registration",
            type : STRING_TYPE,
            subOptions : {
                type : LINK_TYPE,
                data : 'https://www.google.com'
            }
        },
        {
            id : 2,
            data : "Contact Lecturer",
            type : STRING_TYPE,
            subOptions : {
                title : "Choose the lecturer you want to contact",
                type : LIST_TYPE,
                data : [
                    'Kingsford',
                    'Emmanuel',
                    'Jude',
                ],
                subOptions : {
                    type : LIST_TYPE,
                    data : [
                        {
                            id : 1,
                            type : OBJECT_TYPE,
                            data : {
                                name : "Kingsford Ashitey",
                                age : "20",
                                contact : "0558857702"
                            },
                        },
                        {
                            id : 2,
                            type : OBJECT_TYPE,
                            data : {
                                name : "Kingsford Ashitey",
                                age : "20",
                                contact : "0558857702"
                            },
                        },
                        {
                            id : 3,
                            type : OBJECT_TYPE,
                            data : {
                                name : "Kingsford Ashitey",
                                age : "20",
                                contact : "0558857702"
                            },
                        }
                    ]
                }
            }
        },
        {
            id : 3,
            data : "Access Course Materials",
            type : STRING_TYPE,
            subOptions : {
                title : "What programme do you offer",
                type : LIST_TYPE,
                data : [
                    {
                        id : 1,
                        type : LIST_TYPE,
                        data : [

                        ]
                    }
                ]
            }
        },
        {
            id : 4,
            data : "Pay Dues",
            type : STRING_TYPE
        },
        {
            id : 5,
            data : "Semester Activities",
            type : STRING_TYPE
        }
        
        
    ]
}

