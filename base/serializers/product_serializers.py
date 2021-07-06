from rest_framework import serializers
from base.models import Products, Reviews, Presentation
from base.serializers.branch_serializers import BranchSerializer
from base.serializers.brand_serializers import BrandSerializer


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'


# class PresentationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Presentation
#         fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    # reviews = serializers.SerializerMethodField(read_only=True)
    branch = serializers.SerializerMethodField(read_only=True)
    # presentation = serializers.SerializerMethodField(read_only=True)
    brand = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Products
        fields = '__all__'

    # def get_reviews(self, obj):
    #     reviews = obj.review_set.all()
    #     serializer = ReviewSerializer(reviews, many=True)
    #     return serializer.data

    def get_branch(self, obj):
        branch = obj.sucId
        serializer = BranchSerializer(branch, many=False)
        return serializer.data

    # def get_presentation(self, obj):
    #     presentation = obj.presId
    #     serializer = PresentationSerializer(presentation, many=False)
    #     return serializer.data

    def get_brand(self, obj):
        brand = obj.marcId
        serializer = BrandSerializer(brand, many=False)
        return serializer.data
