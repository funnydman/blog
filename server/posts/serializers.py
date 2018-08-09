from rest_framework import serializers

from .models import Post
from comments.serializers import CommentSerializer


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'pub_date', 'last_modified', 'comments')
        read_only_fields = ('id', 'pub_date')
