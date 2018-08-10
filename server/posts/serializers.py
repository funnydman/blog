from comments.serializers import CommentSerializer
from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    categories = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'pub_date', 'last_modified', 'categories', 'comments', 'is_published')
        read_only_fields = ('id', 'pub_date')
