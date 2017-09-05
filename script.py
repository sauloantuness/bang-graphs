import pandas as pd
import sys
from pprint import pprint


class Nodes:
    category_color = [
        '#000',
        '#1abc9c',
        '#f39c12',
        '#52af18',
        '#e74c3c',
        '#8d816f',
        '#9b59b6',
        '#ef6ea3',
        '#34495e',
    ]

    def __init__(self, df):
        self.df = df
        self.nodes = self._get_nodes()

    def _get_nodes(self):
        nodes = {}

        for _, row in self.df.iterrows():
            if not nodes.get(row.problem):
                nodes[row.problem] = {
                    'id': row.problem,
                    'label': row.problem,
                    'color': self.category_color[int(row.category)]
                }

        return [val for key, val in nodes.items()]


class Edges:
    def __init__(self, df):
        self.df = df.sort_values(['user', 'date'])
        self._compute_edges()
        self._normalize_edges()
        self._kruskal()

    def _compute_edges(self):
        current_user = None
        previous_node = None
        edges = {}

        for _, row in self.df.iterrows():
            if row.user != current_user:
                current_user = row.user
                previous_node = row.problem
                continue

            edge = f'{previous_node}->{row.problem}'

            if edges.get(edge):
                edges[edge]['width'] += 1

            else:
                edges[edge] = {
                    'from': previous_node,
                    'to': row.problem,
                    'width': 1
                }

            previous_node = row.problem

        self.edges = [val for key, val in edges.items()]

    def _normalize_edges(self):
        max_width = 0

        for edge in self.edges:
            if edge['width'] > max_width:
                max_width = edge['width']

        max_width = max_width * 0.1

        for edge in self.edges:
            edge['width'] = edge['width'] / max_width
            edge['label'] = '%.2f' % edge['width']

    def _kruskal(self):
        problems = []
        edges = sorted(self.edges, key=lambda k: k['width'], reverse=True) 

        selected_nodes = {}
        selected_edges = []

        for edge in edges:
            add_node = False

            if not selected_nodes.get(edge['from']):
                selected_nodes[edge['from']] = True
                add_node = True

            if not selected_nodes.get(edge['to']):
                add_node = True
                selected_nodes[edge['to']] = True

            if add_node:
                selected_edges.append(edge)


        self.edges = selected_edges


if __name__ == '__main__':
    df = pd.read_csv('solutions.csv')

    df = df[df['category'] == 7]

    if sys.argv[1] == 'edges':
        edges = Edges(df)
        print('var edges = new vis.DataSet(')
        pprint(edges.edges)
        print(');')
    else:
        nodes = Nodes(df)
        print('var nodes = new vis.DataSet(')
        pprint(nodes.nodes)
        print(');')
