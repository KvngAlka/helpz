

export default function handler(req, res) {

    const {method} = req

    const listNews = [
        {
          id : "1", title : "CITSA ELECTION", description : "Election commences on 13th October 2022"
        },
        {
          id : "2", title : "CITSA DINNER", description : "CITSA  dinner comes off on 11th November, 2022"
        },
        {
            id : "3", title : "CITSA WEEK CELEBRATION", description : "CITSA week celebration"
        },
        {
          id : "4", title : "THE SCIENCE OF OWARE BOARD", description : "Prof. Quaynor presents The Science of Oware Board"
      }
      ]

    if(method === "GET"){
        res.status(200).json(listNews)
    }
    
}
  