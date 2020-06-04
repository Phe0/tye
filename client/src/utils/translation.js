import regex from "./regex";

// eslint-disable-next-line no-extend-native
String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const values = Object.values(params);

  // eslint-disable-next-line no-new-func
  return new Function(...names, `return \`${this}\`;`)(...values);
};

function reduce(variables) {
  return variables.map((variable) => {
    variable = variable.replace("${", "");
    variable = variable.replace("}", "");
    return variable;
  });
}

function transformToRegex(text, variableNames) {
  let newText = text;
  variableNames.forEach((variableName) => {
    newText = newText.replace(`\${${variableName}}`, regex[variableName]);
  });
  return newText;
}

function toRegex(toTransform) {
  const literals = toTransform.match(regex.literal);
  const variables = reduce(literals || []);
  const transformed = transformToRegex(toTransform, variables);
  return transformed;
}

function translate(original, rule) {
  const literalsToTranslate = rule.from.match(regex.literal);
  const toTranslateVariables = reduce(literalsToTranslate);
  let toTranslateRegex = transformToRegex(rule.from, toTranslateVariables);
  toTranslateRegex = new RegExp(toTranslateRegex, "g");
  const regexExec = toTranslateRegex.exec(original);
  const variables = {};
  for (let i = 0; i < toTranslateVariables.length; i++) {
    variables[toTranslateVariables[i]] = regexExec[i + 1];
  }
  const result = rule.to.interpolate(variables);
  return result;
}

function findExpressions(text, rules) {
  const expressions = rules.map((rule) => {
    return {
      rule,
      expressions: text.match(new RegExp(rule.regex, "g")),
    };
  });
  return expressions;
}

export { findExpressions, translate, toRegex };
