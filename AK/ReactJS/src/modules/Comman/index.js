export const toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}
export const getCompletionSubTopic = (v, videoTime) => {
    let countComplete = v.sub_topics.filter((v1, i1) => {
        let complete = videoTime[v1._id + "__" + v1.topic_id]?.complete
        return (complete)
    })
    var percent = (countComplete.length * 100 / v.sub_topics.length).toFixed(0);
    return percent;
}
export const getCompletionTopic = (topics, videoTime) => {
    let topicTemp = topics.map((v, k, arr) => (getCompletionSubTopic(v, videoTime)))
    let p = (eval(topicTemp.join("+")) * 100 / (topicTemp.length * 100)).toFixed(0);
    return p;
}