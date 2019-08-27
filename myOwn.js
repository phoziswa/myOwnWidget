function PartiesFactory() {
    var total = [];
    var anc = [];
    var eff = [];
    var da = [];



    function vote(votedFor) {
        if (votedFor == "anc") {
            anc.push(votedFor)
        }
        else if (votedFor == "eff") {
            eff.push(votedFor)
        }
        else if (votedFor == "da") {
            da.push(votedFor)
        }
    }

    function voteCountForParty(party) {
       if (party == "anc") {
            return anc.length;
        }
        else if (party == "eff") {
           return eff.length;
        }
        else if (party == "da") {
            return da.length;
        }
    }
    return {
        vote,
        voteCountForParty

    }
}