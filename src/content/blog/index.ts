// Every published blog post, in any language. Add a post by importing its module here.
import { post as aiCallCenterCost } from '@/content/blog/en/ai-call-center-cost'
import { post as aiChatbotCost } from '@/content/blog/en/ai-chatbot-cost'
import { post as aiVoiceAgentCost } from '@/content/blog/en/ai-voice-agent-cost'
import { post as howToCreateAiChatbot } from '@/content/blog/en/how-to-create-ai-chatbot-for-business'
import { post as lokaluriSeo } from '@/content/blog/ka/lokaluri-seo'
import { post as raArisBrendingi } from '@/content/blog/ka/ra-aris-brendingi'
import { post as raArisChatboti } from '@/content/blog/ka/ra-aris-chatboti'
import { post as raArisSeoOptimizacia } from '@/content/blog/ka/ra-aris-seo-optimizacia'
import type { BlogPost } from '@/lib/blog'

export const blogPosts: BlogPost[] = [
  aiChatbotCost,
  aiVoiceAgentCost,
  howToCreateAiChatbot,
  aiCallCenterCost,
  raArisChatboti,
  raArisSeoOptimizacia,
  lokaluriSeo,
  raArisBrendingi,
]
