import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class FuntranslationsIndex implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Funtranslations Index',
                name: 'N8nDevFuntranslationsIndex',
                icon: { light: 'file:./funtranslations-index.png', dark: 'file:./funtranslations-index.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Funtranslations API integrates site translations into workflows or apps.',
                defaults: { name: 'Funtranslations Index' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFuntranslationsIndexApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
