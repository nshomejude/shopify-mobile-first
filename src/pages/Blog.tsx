import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding ADHD Medication: A Comprehensive Guide",
      excerpt: "Learn about different ADHD medications, their mechanisms, side effects, and how to work with your doctor to find the right treatment.",
      category: "Mental Health",
      author: "Dr. Sarah Johnson",
      date: "2024-03-15",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      title: "The Science Behind Nootropics and Cognitive Enhancement",
      excerpt: "Explore the research on nootropics, smart drugs, and cognitive enhancers. What does science say about their effectiveness?",
      category: "Research",
      author: "Dr. Michael Chen",
      date: "2024-03-12",
      readTime: "12 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Prescription Verification: How We Keep You Safe",
      excerpt: "Behind the scenes look at our prescription verification process and the measures we take to ensure your safety.",
      category: "Safety & Compliance",
      author: "PharmD Lisa Martinez",
      date: "2024-03-10",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Managing Anxiety: Medication Options and Alternatives",
      excerpt: "A balanced look at anxiety medications, their benefits, risks, and complementary approaches for anxiety management.",
      category: "Mental Health",
      author: "Dr. James Wilson",
      date: "2024-03-08",
      readTime: "10 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Research Chemical Safety: Guidelines for Laboratories",
      excerpt: "Essential safety protocols and best practices for laboratories working with research chemicals and novel compounds.",
      category: "Research",
      author: "Dr. Emily Rodriguez",
      date: "2024-03-05",
      readTime: "15 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Testosterone Replacement Therapy: What You Need to Know",
      excerpt: "Complete guide to TRT including who it's for, benefits, risks, monitoring requirements, and what to expect.",
      category: "Hormone Health",
      author: "Dr. Robert Thompson",
      date: "2024-03-01",
      readTime: "11 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Natural Sleep Aids vs. Prescription Sleep Medications",
      excerpt: "Comparing natural remedies like melatonin and valerian root with prescription sleep aids. Which is right for you?",
      category: "Sleep & Wellness",
      author: "PharmD Amanda Lee",
      date: "2024-02-28",
      readTime: "9 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Understanding Drug Interactions: What Every Patient Should Know",
      excerpt: "Learn how medications interact with each other, with food, and with supplements. Essential knowledge for safe medication use.",
      category: "Safety & Compliance",
      author: "Dr. David Park",
      date: "2024-02-25",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    {
      title: "The Future of Peptide Therapy: Research and Applications",
      excerpt: "Exploring the cutting-edge research on peptides and their potential therapeutic applications in various medical fields.",
      category: "Research",
      author: "Dr. Jennifer Kim",
      date: "2024-02-22",
      readTime: "13 min read",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Mental Health", "Research", "Safety & Compliance", "Hormone Health", "Sleep & Wellness"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge Hub</h1>
            <p className="text-lg text-muted-foreground">
              Expert insights on medications, research, and health topics
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <div className="p-6 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">{blogPosts[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button>
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5"></div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Get the latest health insights, medication guides, and research updates delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
