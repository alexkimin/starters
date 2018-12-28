const escapeRegex = str => str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

const pathsToModuleNameMapper = (mapping, prefix = '<rootDir>') => {
  const jestMap = {};
  Object.keys(mapping).forEach((fromPath) => {
    let pattern;
    const toPaths = mapping[fromPath];
    const target = toPaths[0];
    const segments = fromPath.split(/\*/g);
    if (segments.length === 1) {
      pattern = `^${escapeRegex(fromPath)}$`;
      jestMap[pattern] = `${prefix}${target}`;
    } else if (segments.length === 2) {
      pattern = `^${escapeRegex(segments[0])}(.*)${escapeRegex(segments[1])}$`;
      jestMap[pattern] = `${prefix}${target.replace(/\*/g, '$1')}`;
    }
  });
  return jestMap;
};

module.exports = pathsToModuleNameMapper;
