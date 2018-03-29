from rest_framework import serializers
from home.models import Post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'context', 'published_date', 'author')
