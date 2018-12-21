// action creator

export const hashChange = (hash) => {
    return {type: "HASH", value: hash};
};

export const updateWS = (ws) => {
    return {type: "NEW_WS", value: ws};
};

export const updateTagTable = (newTagTable) => {
    return {type: "UPDATE_TAG_TABLE", value: newTagTable};
};

export const updateRuleTable = (newRuleTable) => {
    return {type: "UPDATE_RULE_TABLE", value: newRuleTable};
};

export const updateRule = (updatedRule) => {
    return {type: "UPDATE_RULE", value: updatedRule};
};

export const ignoreFile = (value) => {
    return {type: "IGNORE_FILE", value: value};
};

export const clickedOnForward = () => {
    return {type: "CLICKED_ON_FORWARD"};
};

export const clickedOnBack = () => {
    return {type: "CLICKED_ON_BACK"};
};

export const updateFilePath = (filePath) => {
    return {type: "FILE_PATH", value: filePath};
};

export const submitNewRule = (newRuleProps) => {
    return {type: "SUBMIT_NEW_RULE", value: newRuleProps}
};

export const submitNewTag = (newTagProps) => {
    return {type: "SUBMIT_NEW_TAG", value: newTagProps}
};

export const clearNewRuleForm = () => {
    return {type: "CLEAR_NEW_RULE_FORM"}
};

export const editNewRuleForm = (formContents) => {
    return {type: "EDIT_NEW_RULE_FORM", value: formContents}
};

export const editNewRuleGrammarGuiData = (newRuleData) => {
    return {type: "EDIT_NEW_RULE_GRAMMAR_GUI_DATA", value: newRuleData}
};

export const receiveGuiTree = (newTreeData) => {
    return {type: "RECEIVE_GUI_TREE", value: newTreeData}
};

export const expressionStatementXML = (xmlData) => {
    return {type: "RECEIVE_EXPR_STMT_XML", value: xmlData}
};