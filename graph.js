var edges = new vis.DataSet(
[{'from': 1082, 'label': '2.83', 'to': 1100, 'width': 2.826086956521739},
 {'from': 1100, 'label': '1.30', 'to': 1111, 'width': 1.3043478260869563},
 {'from': 1111, 'label': '0.54', 'to': 1081, 'width': 0.5434782608695652},
 {'from': 1081, 'label': '2.72', 'to': 1148, 'width': 2.7173913043478257},
 {'from': 1148, 'label': '6.52', 'to': 1152, 'width': 6.521739130434782},
 {'from': 1152, 'label': '0.54', 'to': 1056, 'width': 0.5434782608695652},
 {'from': 1056, 'label': '0.11', 'to': 1191, 'width': 0.10869565217391303},
 {'from': 1191, 'label': '7.61', 'to': 1194, 'width': 7.608695652173912},
 {'from': 1194, 'label': '0.76', 'to': 1128, 'width': 0.7608695652173912},
 {'from': 1128, 'label': '0.87', 'to': 1195, 'width': 0.8695652173913042},
 {'from': 1195, 'label': '10.00', 'to': 1200, 'width': 9.999999999999998},
 {'from': 1200, 'label': '5.43', 'to': 1201, 'width': 5.434782608695651},
 {'from': 1201, 'label': '0.65', 'to': 1205, 'width': 0.6521739130434782},
 {'from': 1205, 'label': '0.33', 'to': 1208, 'width': 0.3260869565217391},
 {'from': 1208, 'label': '0.11', 'to': 1123, 'width': 0.10869565217391303},
 {'from': 1123, 'label': '0.76', 'to': 1135, 'width': 0.7608695652173912},
 {'from': 1135, 'label': '0.43', 'to': 1085, 'width': 0.4347826086956521},
 {'from': 1085, 'label': '0.11', 'to': 1207, 'width': 0.10869565217391303},
 {'from': 1207, 'label': '0.11', 'to': 1314, 'width': 0.10869565217391303},
 {'from': 1314, 'label': '0.11', 'to': 1362, 'width': 0.10869565217391303},
 {'from': 1362, 'label': '0.22', 'to': 1427, 'width': 0.21739130434782605},
 {'from': 1427, 'label': '0.11', 'to': 1466, 'width': 0.10869565217391303},
 {'from': 1081, 'label': '2.39', 'to': 1076, 'width': 2.3913043478260865},
 {'from': 1076, 'label': '3.91', 'to': 1082, 'width': 3.913043478260869},
 {'from': 1100, 'label': '0.87', 'to': 1148, 'width': 0.8695652173913042},
 {'from': 1148, 'label': '1.52', 'to': 1191, 'width': 1.5217391304347825},
 {'from': 1194, 'label': '1.96', 'to': 1200, 'width': 1.9565217391304346},
 {'from': 1200, 'label': '2.61', 'to': 1466, 'width': 2.6086956521739126},
 {'from': 1085, 'label': '0.11', 'to': 1195, 'width': 0.10869565217391303},
 {'from': 1195, 'label': '1.63', 'to': 1148, 'width': 1.6304347826086956},
 {'from': 1148, 'label': '1.09', 'to': 1128, 'width': 1.0869565217391304},
 {'from': 1128, 'label': '1.63', 'to': 1123, 'width': 1.6304347826086956},
 {'from': 1123, 'label': '0.33', 'to': 1194, 'width': 0.3260869565217391},
 {'from': 1194, 'label': '1.30', 'to': 1081, 'width': 1.3043478260869563},
 {'from': 1081, 'label': '5.87', 'to': 1082, 'width': 5.869565217391304},
 {'from': 1082, 'label': '1.85', 'to': 1152, 'width': 1.8478260869565215},
 {'from': 1152, 'label': '0.43', 'to': 1201, 'width': 0.4347826086956521},
 {'from': 1201, 'label': '0.22', 'to': 1135, 'width': 0.21739130434782605},
 {'from': 1135, 'label': '0.22', 'to': 1100, 'width': 0.21739130434782605},
 {'from': 1100, 'label': '0.87', 'to': 1191, 'width': 0.8695652173913042},
 {'from': 1191, 'label': '1.52', 'to': 1200, 'width': 1.5217391304347825},
 {'from': 1200, 'label': '0.22', 'to': 1208, 'width': 0.21739130434782605},
 {'from': 1208, 'label': '0.22', 'to': 1205, 'width': 0.21739130434782605},
 {'from': 1205, 'label': '0.33', 'to': 1344, 'width': 0.3260869565217391},
 {'from': 1344, 'label': '0.22', 'to': 1391, 'width': 0.21739130434782605},
 {'from': 1391, 'label': '0.11', 'to': 1227, 'width': 0.10869565217391303},
 {'from': 1227, 'label': '0.33', 'to': 1111, 'width': 0.3260869565217391},
 {'from': 1111, 'label': '0.11', 'to': 1330, 'width': 0.10869565217391303},
 {'from': 1330, 'label': '0.22', 'to': 1469, 'width': 0.21739130434782605},
 {'from': 1469, 'label': '0.54', 'to': 1427, 'width': 0.5434782608695652},
 {'from': 1200, 'label': '0.87', 'to': 1081, 'width': 0.8695652173913042},
 {'from': 1148, 'label': '0.98', 'to': 1100, 'width': 0.9782608695652173},
 {'from': 1111, 'label': '0.87', 'to': 1152, 'width': 0.8695652173913042},
 {'from': 1152, 'label': '2.07', 'to': 1082, 'width': 2.0652173913043477},
 {'from': 1082, 'label': '0.65', 'to': 1123, 'width': 0.6521739130434782},
 {'from': 1123, 'label': '0.22', 'to': 1344, 'width': 0.21739130434782605},
 {'from': 1344, 'label': '0.11', 'to': 1128, 'width': 0.10869565217391303},
 {'from': 1128, 'label': '0.65', 'to': 1135, 'width': 0.6521739130434782},
 {'from': 1135, 'label': '0.11', 'to': 1469, 'width': 0.10869565217391303},
 {'from': 1469, 'label': '0.54', 'to': 1191, 'width': 0.5434782608695652},
 {'from': 1191, 'label': '0.11', 'to': 1584, 'width': 0.10869565217391303},
 {'from': 1584, 'label': '0.11', 'to': 1056, 'width': 0.10869565217391303},
 {'from': 1056, 'label': '0.22', 'to': 1053, 'width': 0.21739130434782605},
 {'from': 1053, 'label': '0.22', 'to': 1057, 'width': 0.21739130434782605},
 {'from': 1057, 'label': '0.11', 'to': 1862, 'width': 0.10869565217391303},
 {'from': 1862, 'label': '0.54', 'to': 1928, 'width': 0.5434782608695652},
 {'from': 1928, 'label': '1.20', 'to': 1931, 'width': 1.1956521739130432},
 {'from': 1931, 'label': '0.43', 'to': 1790, 'width': 0.4347826086956521},
 {'from': 1790, 'label': '0.98', 'to': 1835, 'width': 0.9782608695652173},
 {'from': 1835, 'label': '0.22', 'to': 2032, 'width': 0.21739130434782605},
 {'from': 2032, 'label': '0.33', 'to': 2182, 'width': 0.3260869565217391},
 {'from': 1128, 'label': '0.87', 'to': 1469, 'width': 0.8695652173913042},
 {'from': 1469, 'label': '0.65', 'to': 1082, 'width': 0.6521739130434782},
 {'from': 1082, 'label': '2.28', 'to': 1148, 'width': 2.282608695652174},
 {'from': 1148, 'label': '1.09', 'to': 1195, 'width': 1.0869565217391304},
 {'from': 1195, 'label': '1.30', 'to': 1194, 'width': 1.3043478260869563},
 {'from': 1194, 'label': '5.43', 'to': 1191, 'width': 5.434782608695651},
 {'from': 1191, 'label': '0.54', 'to': 1466, 'width': 0.5434782608695652},
 {'from': 1466, 'label': '0.54', 'to': 1081, 'width': 0.5434782608695652},
 {'from': 1081, 'label': '0.87', 'to': 1200, 'width': 0.8695652173913042},
 {'from': 1200, 'label': '0.65', 'to': 1552, 'width': 0.6521739130434782},
 {'from': 1552, 'label': '0.43', 'to': 1774, 'width': 0.4347826086956521},
 {'from': 1774, 'label': '0.33', 'to': 1764, 'width': 0.3260869565217391},
 {'from': 1764, 'label': '0.33', 'to': 1152, 'width': 0.3260869565217391},
 {'from': 1152, 'label': '0.22', 'to': 1799, 'width': 0.21739130434782605},
 {'from': 1799, 'label': '0.43', 'to': 1835, 'width': 0.4347826086956521},
 {'from': 1835, 'label': '0.22', 'to': 1201, 'width': 0.21739130434782605},
 {'from': 1201, 'label': '0.76', 'to': 1855, 'width': 0.7608695652173912},
 {'from': 1855, 'label': '0.11', 'to': 2127, 'width': 0.10869565217391303},
 {'from': 2127, 'label': '0.65', 'to': 2131, 'width': 0.6521739130434782},
 {'from': 2131, 'label': '0.22', 'to': 2300, 'width': 0.21739130434782605},
 {'from': 1128, 'label': '2.50', 'to': 1152, 'width': 2.4999999999999996},
 {'from': 1152, 'label': '2.83', 'to': 1195, 'width': 2.826086956521739},
 {'from': 1148, 'label': '0.76', 'to': 1200, 'width': 0.7608695652173912},
 {'from': 1201, 'label': '0.54', 'to': 1123, 'width': 0.5434782608695652},
 {'from': 1123, 'label': '0.54', 'to': 1085, 'width': 0.5434782608695652},
 {'from': 1085, 'label': '0.33', 'to': 1081, 'width': 0.3260869565217391},
 {'from': 1081, 'label': '0.11', 'to': 1208, 'width': 0.10869565217391303},
 {'from': 1208, 'label': '0.11', 'to': 1082, 'width': 0.10869565217391303},
 {'from': 1082, 'label': '0.11', 'to': 1227, 'width': 0.10869565217391303}]
);
